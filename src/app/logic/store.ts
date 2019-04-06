import * as fromList from '@logic/reducers/list.reducer';
import * as fromArticle from '@logic/reducers/comments.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
    list: fromList.State;
    article: fromArticle.State;
}

export const reducers: ActionReducerMap<AppState> = {
    list: fromList.reducer,
    article: fromArticle.reducer,
};

/* MAIN SELECTORS */
export const getListState = createFeatureSelector<AppState>('list');
export const getArticleState = createFeatureSelector<AppState>('article');

/* News */
export const getNews = createSelector(getListState, fromList.getNews);
export const getAfter = createSelector(getListState, fromList.getAfter);

/* Article  */
export const getArticle = createSelector(getArticleState, fromArticle.getArticle);
export const getComments = createSelector(getArticleState, fromArticle.getComments);

