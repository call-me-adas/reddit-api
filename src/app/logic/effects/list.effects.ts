import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '@logic/services/list/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
    FETCH_NEWS,
    FetchNews,
    FetchNewsFail,
    FetchNewsSuccess
} from '@logic/actions/list.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

@Injectable()
export class ListEffects {
    @Effect()
    fetchPermissions$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_NEWS),
            mergeMap((action: FetchNews) => {
                return this.listService.getNews(action.payload)
                    .pipe(map((news: any) => new FetchNewsSuccess(news.data.children)),
                        catchError((error => of(new FetchNewsFail(error))))
                    );
            })
        );

    constructor(private actions$: Actions, private listService: ListService) {
    }
}
