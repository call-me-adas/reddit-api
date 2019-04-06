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
import {
    FETCH_COMMENTS,
    FetchArticleSuccess,
    FetchComments,
    FetchCommentsFail,
    FetchCommentsSuccess
} from "@logic/actions/comments.action";
import {CommentsService} from "@logic/services/comments/comments.service";


@Injectable()
export class CommentsEffects {
    @Effect()
    fetchComments$: Observable<Action> = this.actions$
        .pipe(ofType(FETCH_COMMENTS),
            mergeMap((action: FetchComments) => {
                return this.commentsService.getArticleComments(action.payload)
                    .pipe(flatMap((res: any) => [
                            new FetchArticleSuccess(res[0].data.children[0].data),
                            new FetchCommentsSuccess(res[1].data.children)
                        ]),
                        catchError((error => of(new FetchCommentsFail(error))))
                    );
            })
        );

    constructor(private actions$: Actions, private commentsService: CommentsService) {
    }
}
