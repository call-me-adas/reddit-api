import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, getArticle, getComments} from '@logic/store';
import {FetchComments} from '@logic/actions/comments.action';
import {CommentModel} from '@logic/models/comment.model';
import {ArticleModel} from '@logic/models/article.model';

@Component({
    selector: 'page-article',
    templateUrl: './article.page.html',
    styleUrls: ['./article.page.scss']
})

export class ArticlePage implements OnInit, OnDestroy {
    public urlParams: {category: string , id: string} = {category: '', id: ''};
    public parametersObservable: Subscription;
    private comments$: Observable<CommentModel>;
    private article$: Observable<ArticleModel>;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    }


    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe((res) => {
            this.urlParams.category = res.category;
            this.urlParams.id = res['id.json'].split('.')[0];
            this.store.dispatch(new FetchComments(this.urlParams));

            this.article$ = this.store.pipe(select(getArticle));
            this.comments$ = this.store.pipe(select(getComments));
        });
    }

    public ngOnDestroy(): void {
        this.parametersObservable.unsubscribe();
    }

}
