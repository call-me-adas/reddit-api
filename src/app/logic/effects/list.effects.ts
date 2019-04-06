import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '@logic/services/list/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
    ADD_NEWS, AddNewsSuccess,
    FETCH_NEWS, FETCH_NEWS_BY_QUERY,
    FetchNews, FetchNewsByQuery,
    FetchNewsFail,
    FetchNewsSuccess, SetLastItem
} from '@logic/actions/list.action';
import {catchError, map, mergeMap, tap, flatMap} from 'rxjs/operators';

@Injectable()
export class ListEffects {
    @Effect()
    fetchNews$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_NEWS),
            mergeMap((action: FetchNews) => {
                return this.listService.getNews(action.payload)
                    .pipe(flatMap((news: any) => [
                            new FetchNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail(error))))
                    );
            })
        );

    @Effect()
    fetchNewsByQuery$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_NEWS_BY_QUERY),
            mergeMap((action: FetchNewsByQuery) => {
                return this.listService.getNewsByQuery(action.payload)
                    .pipe(flatMap((news: any) => [
                            new FetchNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail(error))))
                    );
            })
        );

    @Effect()
    addNews$: Observable<Action> = this.actions$
        .pipe(ofType(ADD_NEWS),
            mergeMap((action: FetchNewsByQuery) => {
                return this.listService.addNews(action.payload)
                    .pipe(flatMap((news: any) => [
                            new AddNewsSuccess(news.data.children),
                            new SetLastItem(news.data.after)
                        ]),
                        catchError((error => of(new FetchNewsFail(error))))
                    );
            })
        );

    constructor(private actions$: Actions, private listService: ListService) {
    }
}
