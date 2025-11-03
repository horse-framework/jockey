import { ApplicationConfig, EnvironmentInjector, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling, withRouterConfig, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { exceptionInterceptor } from '../lib/interceptors/exception.interceptor';
import { tokenInterceptor } from '../lib/interceptors/token.interceptor';
import { unauthorizeInterceptor } from '../lib/interceptors/unauthorize.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideAppStores } from '../lib/stores/store.provider';
import { initApplication } from './app.initializer';
import { apiPathInterceptor } from '../lib/interceptors/api-path.interceptor';
import { AppEvents } from './app.events';
import { initializeEnvironment } from '../lib/environment.initializer';
import { SessionStore } from './stores/session-store';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';

export async function createAppConfig() {

  const configProviders = await initializeEnvironment();

  let appConfig: ApplicationConfig = {
    providers: [
      ...configProviders,
      provideHttpClient(
        withInterceptors([exceptionInterceptor, apiPathInterceptor, tokenInterceptor, unauthorizeInterceptor])
      ),
      provideAnimations(),
      provideToastr(),
      provideRouter(routes,
        withRouterConfig({
          onSameUrlNavigation: 'reload'
        }),
        withInMemoryScrolling({
          scrollPositionRestoration: 'top',
          anchorScrolling: 'enabled'
        }),
        withEnabledBlockingInitialNavigation(),
        withViewTransitions()
      ),
      provideAppStores([SessionStore]),
      provideAppInitializer(() => initApplication(inject(EnvironmentInjector))),
      AppEvents
    ]
  };

  return appConfig;
};