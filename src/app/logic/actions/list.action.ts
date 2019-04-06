import {Action} from '@ngrx/store';
import {NewsModel} from "@logic/models/news.model";

export const ADD_NEWS = '[List] ADD_NEWS';
export const ADD_NEWS_SUCCESS = '[List] ADD_NEWS_SUCCESS';
export const FETCH_NEWS = '[List] FETCH_NEWS';
export const FETCH_NEWS_BY_QUERY = '[List] FETCH_NEWS_BY_QUERY';
export const FETCH_NEWS_SUCCESS = '[List] FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAIL = '[List] FETCH_NEWS_FAIL';
export const SET_LAST_ITEM = '[List] SET_LAST_ITEM';


export class SetLastItem implements Action {
    readonly type = SET_LAST_ITEM;

    constructor(public payload: any) {
    }
}

export class FetchNews implements Action {
    readonly type = FETCH_NEWS;

    constructor(public payload: { category: string, query: string}) {
    }
}

export class FetchNewsByQuery implements Action {
    readonly type = FETCH_NEWS_BY_QUERY;

    constructor(public payload: { category: string, query: string}) {
    }
}

export class AddNews implements Action {
    readonly type = ADD_NEWS;

    constructor(public payload: { category: string, query: string}) {
    }
}

export class FetchNewsSuccess implements Action {
    readonly type = FETCH_NEWS_SUCCESS;

    constructor(public payload: Array<NewsModel>) {
    }
}

export class AddNewsSuccess implements Action {
    readonly type = ADD_NEWS_SUCCESS;

    constructor(public payload: Array<NewsModel>) {
    }
}

export class FetchNewsFail implements Action {
    readonly type = FETCH_NEWS_FAIL;

    constructor(public payload: any) {
    }

}


export type Actions =
    | SetLastItem
    | AddNews
    | AddNewsSuccess
    | FetchNews
    | FetchNewsByQuery
    | FetchNewsSuccess
    | FetchNewsFail;
