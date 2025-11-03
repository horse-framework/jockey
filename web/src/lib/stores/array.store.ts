import { Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { IApplicationStore } from "./application.store";
import { from, Observable, Subject } from "rxjs";
import { GuidHelper } from "../helpers/guid.helper";

export interface ArrayStoreAction<TState> {
    name: string;
    store: ArrayStore<TState>;
    state: TState[];
    payload: any
};

@Injectable({
    providedIn: 'root'
})
export class ArrayStore<TState> implements IApplicationStore {

    #guid: string;
    #eventName!: string;

    protected itemLimit: number = -1;
    protected itemLimitTolerance: number = 10;
    protected reverse: boolean = false;
    protected supportedStorageEvents: string[] = ['set', 'add', 'remove', 'clear', 'action'];
    protected useLocalStorageEvents: boolean = true;

    #state: WritableSignal<TState[]> = signal([]);
    get state(): Signal<TState[]> { return this.#state.asReadonly(); }

    #action$: Subject<ArrayStoreAction<TState>> = new Subject<ArrayStoreAction<TState>>();
    get action$(): Observable<ArrayStoreAction<TState>> { return this.#action$; }

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
                        case 'set':
                            this.setState(eventModel.payload, false);
                            break;
                        case 'add':
                            this.addItem(eventModel.payload, false);
                            break;
                        case 'remove':
                            let itemFromClone = this.findFromClone(eventModel.payload);
                            if (itemFromClone != null) {
                                this.removeItem(itemFromClone, false);
                            }
                            break;
                        case 'clear':
                            this.clearItems(false);
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

    private findFromClone(clone: TState): TState | null {

        for (let i = 0; i < this.#state().length; i++) {
            let stateItem = this.#state()[i];

            let allSame = true;
            for (var key in clone) {
                if (typeof clone[key] === 'string' || typeof clone[key] === 'number' || typeof clone[key] === 'boolean') {
                    if (clone[key] != stateItem[key]) {
                        allSame = false;
                    }
                }
            }

            if (allSame)
                return stateItem;
        }

        return null;
    }

    setState(state: TState[], triggerStorageEvent: boolean = true): void {
        this.#state.set(state);
        let arg: ArrayStoreAction<TState> = { name: 'set', store: this, state: state, payload: null };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('set', state);
        }
    }

    refresh(triggerStorageEvent: boolean = true): void {
        let arg: ArrayStoreAction<TState> = { name: 'refresh', store: this, state: this.#state(), payload: null };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('refresh', null);
        }
    }

    addItem(item: TState, triggerStorageEvent: boolean = true): void {
        this.#state.update(prev => {
            if (this.reverse) {
                prev.unshift(item);
            }
            else {
                prev.push(item);
            }

            if (this.itemLimit > 0 && prev.length > this.itemLimit + this.itemLimitTolerance) {

                let arg: ArrayStoreAction<TState> = { name: 'remove', store: this, state: this.#state(), payload: prev[0] };
                prev.splice(this.itemLimit);
                this.#action$.next(arg);
            }

            return prev;
        });

        let arg: ArrayStoreAction<TState> = { name: 'add', store: this, state: this.#state(), payload: item };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('add', item);
        }
    }

    removeItem(item: TState, triggerStorageEvent: boolean = true): void {
        let index = this.#state().indexOf(item);
        if (index < 0)
            return;

        this.#state.update(prev => {
            prev.splice(index, 1);
            return prev;
        });

        let arg: ArrayStoreAction<TState> = { name: 'remove', store: this, state: this.#state(), payload: item };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('remove', item);
        }
    }

    clearItems(triggerStorageEvent: boolean = true): void {
        this.#state.update(prev => {
            prev.splice(0, prev.length);
            return prev;
        });

        let arg: ArrayStoreAction<TState> = { name: 'clear', store: this, state: this.#state(), payload: null };
        this.#action$.next(arg);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('clear', null);
        }
    }

    raiseAction(name: string, payload: any = null, triggerStorageEvent: boolean = true): void {

        let action: ArrayStoreAction<TState> = {
            name: name,
            store: this,
            state: this.#state(),
            payload: payload
        };

        this.#action$.next(action);

        if (triggerStorageEvent) {
            this.sendLocalStorageEvent('action', payload, name);
        }
    }

    hasData(): boolean {
        return this.#state().length > 0;
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