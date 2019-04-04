import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialModule} from '@shared/material.module';
import {LoaderComponent} from '@components/loader/loader.component';

@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule
    ],
    declarations: [
        LoaderComponent
    ],
    exports: [
        CommonModule,
        LoaderComponent,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class SharedModule {
}
