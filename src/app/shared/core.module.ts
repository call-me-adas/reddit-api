import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LogicModule} from '@logic/logic.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpService} from '@shared/interceptors/http/http.service';
import {CacheInterceptor} from '@shared/interceptors/http/cache.interceptor';
import {ErrorHandlerInterceptor} from '@shared/interceptors/http/error-handler.interceptor';
import {ApiPrefixInterceptor} from '@shared/interceptors/http/api-prefix.interceptor';
import {HttpCacheService} from '@shared/interceptors/http/http-cache.service';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      LogicModule,
      RouterModule,
      HttpClientModule
  ],
  providers: [
      HttpCacheService,
      ApiPrefixInterceptor,
      ErrorHandlerInterceptor,
      CacheInterceptor,
      {
          provide: HttpClient,
          useClass: HttpService
      }
  ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}

