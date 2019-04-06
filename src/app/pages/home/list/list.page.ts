import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AddNews, FetchNews, FetchNewsByQuery} from '@logic/actions/list.action';
import {NewsModel} from '@logic/models/news.model';
import {AppState, getAfter, getNews} from '@logic/store';
import {debounceTime, map} from 'rxjs/operators';

@Component({
    selector: 'page-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss']
})

export class ListPage implements OnInit, OnDestroy {
    public urlParams: {category: string , query: string, after: string} = {category: '', query: '', after: ''};
    public parametersObservable: Subscription;
    private list$: Observable<NewsModel>;
    public keyUp = new Subject<KeyboardEvent>();
    private subscriptionValue: Subscription;
    public after: string;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
        this.subscriptionValue = this.keyUp.pipe( map(event => event.target), debounceTime(500) )
            .subscribe((data: HTMLInputElement) => {
                this.urlParams.query = data.value;
                this.store.dispatch(new FetchNewsByQuery(this.urlParams));
            });
    }

    onScrollDown() {
        this.store.dispatch(new AddNews(this.urlParams));
    }

    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe((res) => {
            this.urlParams.category = res.category;
            this.store.dispatch(new FetchNews(this.urlParams));

            this.list$ = this.store.pipe(select(getNews));
            this.store.pipe(select(getAfter)).subscribe(data => this.urlParams.after = data);
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
        this.subscriptionValue.unsubscribe();
    }

}
