import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {ListEffects} from '@logic/effects/list.effects';
import {CommentsEffects} from '@logic/effects/comments.effects';

@NgModule({
    imports: [
        HttpClientModule,
        EffectsModule.forRoot([ListEffects, CommentsEffects]),
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument()
    ]
})
export class LogicModule {
}
