import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {PreloadAllModules, provideRouter, RouterModule, withDebugTracing, withPreloading} from '@angular/router';

import {routes} from './app.routes';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes, withPreloading(PreloadAllModules),
    withDebugTracing(),),
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ],
};
