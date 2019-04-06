import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {CoreModule} from '@shared/core.module';
import {SharedModule} from '@shared/shared.module';
import {HomeModule} from '@pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
      SharedModule,
      HomeModule,
      CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
