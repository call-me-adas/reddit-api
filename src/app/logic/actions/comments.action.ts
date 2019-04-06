import {Action} from '@ngrx/store';
import {ArticleModel} from '@logic/models/article.model';

export const FETCH_COMMENTS = '[Article] FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = '[Article] FETCH_COMMENTS_SUCCESS';
export const FETCH_ARTICLE_SUCCESS = '[Article] FETCH_ARTICLE_SUCCESS';
export const FETCH_COMMENTS_FAIL = '[Article] FETCH_COMMENTS_FAIL';

export class FetchComments implements Action {
    readonly type = FETCH_COMMENTS;

    constructor(public payload: { category: string, id: string}) {
    }
}

export class FetchCommentsSuccess implements Action {
    readonly type = FETCH_COMMENTS_SUCCESS;

    constructor(public payload: {data}) {
    }
}

export class FetchArticleSuccess implements Action {
    readonly type = FETCH_ARTICLE_SUCCESS;

    constructor(public payload: Array<ArticleModel>) {
    }
}

export class FetchCommentsFail implements Action {
    readonly type = FETCH_COMMENTS_FAIL;

    constructor() {
    }
}


export type Actions =
    | FetchComments
    | FetchCommentsSuccess
    | FetchArticleSuccess
    | FetchCommentsFail;
