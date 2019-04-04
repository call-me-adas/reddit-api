import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import {ListPage} from '@pages/home/list/list.page';

@NgModule({
    imports: [
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
