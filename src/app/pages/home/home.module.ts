import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {HomePage} from "@pages/home/home.page";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot([
            { path: '', loadChildren: './list/list.module#ListModule'},
            { path: ':category/comments/:id.json', loadChildren: './article/article.module#ArticleModule'},
        ])
    ],
    declarations: [
        HomePage,
    ],
    exports: [
        HomePage
    ]
})
export class HomeModule {
}
