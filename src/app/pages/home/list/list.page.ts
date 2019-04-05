import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {FetchNews} from "@logic/actions/list.action";
import {NewsModel} from "@logic/models/news.model";
import {getNews} from "@logic/store";
import {map} from "rxjs/operators";

@Component({
    selector: 'page-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit, OnDestroy {
    category: string;
    public parametersObservable: Subscription;
    private list$: Observable<NewsModel>;

    constructor(private route: ActivatedRoute, private store: Store<{}>) {
    }

    ngOnInit() {
        this.parametersObservable = combineLatest(this.route.params).subscribe((res) => {
            this.category = res[0].category;
            this.store.dispatch(new FetchNews({category: this.category}));

            this.list$ = this.store.pipe(select(getNews));
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
    }

}
