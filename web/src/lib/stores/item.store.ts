import { Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { IApplicationStore } from "./application.store";
import { Observable, Subject } from "rxjs";
import { GuidHelper } from "../helpers/guid.helper";

export interface ItemStoreAction<TState> {
    name: string;
    store: ItemStore<TState>;
    previous: TState | null;
    state: TState | null;
    payload?: any;
};

@Injectable({
    providedIn: 'root'
})
export class ItemStore<TState> implements IApplicationStore {

    #guid: string;
    #eventName: string = '';

    protected supportedStorageEvents: string[] = ['change', 'action', 'update', 'refresh'];
    protected useLocalStorageEvents: boolean = true;

    #state: WritableSignal<TState | null> = signal(null);
    get state(): Signal<TState | null> { return this.#state.asReadonly(); }

    #action$: Subject<ItemStoreAction<TState>> = new Subject<ItemStoreAction<TState>>();
    get action$(): Observable<ItemStoreAction<TState>> { return this.#action$; }

    constructor() {
        this.#guid = GuidHelper.create();

        if (this.useLocalStorageEvents) {
            this.#eventName = this.constructor.name + 'Event';
            addEventListener('storage', (event: StorageEvent) => {
                if (event.key != this.#eventName) { return; }
                let value = event.newValue;
                if (!value) { return; }

                try {
                    let eventModel = JSON.parse(value);
                    if (!eventModel.sender || eventModel.sender == this.#guid) {
                        return;
                    }

                    switch (eventModel.event) {
                        case 'change':
                            this.setState(eventModel.payload, false);
                            break;
                        case 'update':
                            this.updateState(eventModel.payload, false);
                            break;
                        case 'refresh':
                            this.refresh(false);
                            break;
                        case 'action':
                            this.raiseAction(eventModel.action, eventModel.payload, false);
                            break;
                    }
                }
                catch { }
            });
        }
    }

    protected setStateSilent(state: TState): void {
        this.#state.set(state);
    }

    setState(state: TState | null, triggerStorageEvent: boolean = true): void {
        let arg: ItemStoreAction<TState> = { previous: this.#state(), state: state, name: 'set', store: this };
        this.#state.set(state);
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('change', state);
        }
    }

    updateState(values: Partial<TState>, triggerStorageEvent: boolean = true): void {

        if (this.#state() == null)
            return;

        let previous = this.#state();

        this.#state.update((prev) => {
            return {
                ...prev!,
                ...values
            };
        });

        let arg: ItemStoreAction<TState> = { name: 'update', store: this, previous: previous, state: this.#state(), payload: values };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('update', values);
        }
    }

    refresh(triggerStorageEvent: boolean = true): void {
        this.raiseAction('refresh', null, false);
        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('refresh', null);
        }
    }

    raiseAction(name: string, payload: any = null, triggerStorageEvent: boolean = true): void {
        let arg: ItemStoreAction<TState> = { previous: this.#state(), state: this.#state(), name: name, store: this, payload: payload };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('action', payload, name);
        }
    }

    private sendLocalStorageEvent(eventName: string, payload: any, action: string | null = null): void {

        if (!this.useLocalStorageEvents) {
            return;
        }

        if (!this.supportedStorageEvents.includes(eventName)) {
            return;
        }

        let model = {
            sender: this.#guid,
            event: eventName,
            payload: payload,
            action: action
        };

        localStorage.setItem(this.#eventName, JSON.stringify(model));
        setTimeout(() => localStorage.removeItem(this.#eventName), 1);
    }

}