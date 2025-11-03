import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { createAppConfig } from './app/app.config';

async function main() {
  let appConfig = await createAppConfig();
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));
}

main();