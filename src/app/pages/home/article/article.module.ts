import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {ArticlePage} from '@pages/home/article/article.page';
import {CommentComponent} from '@pages/home/article/comments.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '', component: ArticlePage }
        ])
    ],
    declarations: [
        ArticlePage,
        CommentComponent
    ],
    exports: []
})
export class ArticleModule {
}
