import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LogicModule} from '@logic/logic.module';
import {HttpClientModule} from '@angular/common/http';
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
      HttpClientModule
  ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }
}

