import { EnvironmentInjector, inject, runInInjectionContext } from '@angular/core';
import { SessionStore } from './stores/session-store';

export function initApplication(env: EnvironmentInjector): Promise<void> {
    return runInInjectionContext(env, async (): Promise<any> => {
        let session = inject(SessionStore);
        session.run();
    });
}