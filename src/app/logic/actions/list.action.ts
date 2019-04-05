import {Action} from '@ngrx/store';
import {NewsModel} from "@logic/models/news.model";

export const FETCH_NEWS = '[Auth] FETCH_NEWS';
export const FETCH_NEWS_SUCCESS = '[Auth] FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAIL = '[Auth] FETCH_NEWS_FAIL';


export class FetchNews implements Action {
    readonly type = FETCH_NEWS;

    constructor(public payload: { category: string } = null) {
    }
}

export class FetchNewsSuccess implements Action {
    readonly type = FETCH_NEWS_SUCCESS;

    constructor(public payload: Array<NewsModel>) {
    }
}

export class FetchNewsFail implements Action {
    readonly type = FETCH_NEWS_FAIL;

    constructor(public payload: any) {
    }

}


export type Actions =
    | FetchNews
    | FetchNewsSuccess
    | FetchNewsFail;
