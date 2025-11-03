import { InjectionToken, Provider } from "@angular/core";

export interface Environment {
  production: boolean;
  apiUrl: string;
  websocketUrl: string;
  version: string;
}

export const ENVIRONMENT = new InjectionToken<Environment>('ENVIRONMENT');

export async function initializeEnvironment(): Promise<Provider[]> {

  let environment: Environment = {
    production: true,
    apiUrl: location.protocol.toLowerCase() + '//' + location.host + '/api',
    websocketUrl: location.protocol.toLowerCase().replace('http', 'ws') + '//' + location.host,
    version: '7.2.5'
  };

  console.log(environment);

  return [{ provide: ENVIRONMENT, useValue: environment }];
}
