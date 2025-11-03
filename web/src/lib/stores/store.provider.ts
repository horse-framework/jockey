import { Provider, Type } from '@angular/core';
import { IApplicationStore } from './application.store';

export function provideAppStores(stores: Type<IApplicationStore>[]): Provider[] {
    return stores.map(storeClass => ({
        provide: storeClass,
        useClass: storeClass
    }));
}