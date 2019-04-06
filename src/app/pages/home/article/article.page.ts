import {AfterContentChecked, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {combineLatest, Observable, of, Subject, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState, getAfter, getArticle, getComments, getNews} from "@logic/store";
import {FetchComments} from "@logic/actions/comments.action";

@Component({
    selector: 'page-article',
    templateUrl: './article.page.html',
    styleUrls: ['./article.page.scss']
})

export class ArticlePage implements OnInit, OnDestroy {
    public urlParams: {category: string , id: string} = {category: '', id: ''};
    public parametersObservable: Subscription;
    private comments$: Observable<any>;
    private article$: Observable<any>;
     comments = [

        {
            text: "1",
            comments: [
                {
                    text: "1.1",
                    comments: [
                        {
                            text: "1.1.1 "
                        }
                    ]
                },
                {
                    text: "1.2",
                    comments: [
                        {
                            text: "1.2.1"
                        }
                    ]
                }
            ]
        },
        {
            text: "2",
            comments: [
                {
                    text: "2.1",
                    comments: [
                        {
                            text: "2.1.1"
                        }
                    ]
                }
            ]
        }
        ]
    constructor(private route: ActivatedRoute, private store: Store<AppState>) {

    }


    ngOnInit() {
        this.parametersObservable = this.route.params.subscribe((res: any) => {
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
