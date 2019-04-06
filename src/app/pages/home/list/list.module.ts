import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {ListPage} from '@pages/home/list/list.page';
import {OrderModule} from 'ngx-order-pipe';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
    imports: [
        InfiniteScrollModule,
        OrderModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: 'subreddits', children: [
                    {path: ':category', component: ListPage},
                    {path: '', redirectTo: 'aww', pathMatch: 'full' }
                ]
            },
            {path: '', redirectTo: 'subreddits/aww', pathMatch: 'full' }
        ])
    ],
    declarations: [
        ListPage
    ],
    exports: []
})
export class ListModule {
}
