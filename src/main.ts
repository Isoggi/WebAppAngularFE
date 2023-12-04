//import * as compiler from '@angular/compiler';
import { enableProdMode } from '@angular/core';
//import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
//import { AppComponent } from './app/app.component';
import { environment } from './configs/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModules } from './app/app.modules';
if (environment.production) {
  enableProdMode()
}

//bootstrapApplication(AppComponent, appConfig)
//  .catch((err) => console.error(err));
platformBrowserDynamic().bootstrapModule(AppModules)
  .catch((err) => console.error(err));
