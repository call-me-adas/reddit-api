import * as fromList from '@logic/reducers/list.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface AppState {
    list: fromList.State;
}

export const reducers: ActionReducerMap<AppState> = {
    list: fromList.reducer,
};

/* MAIN SELECTORS */
export const getListState = createFeatureSelector<AppState>('list');

/* News */
export const getNews = createSelector(getListState, fromList.getNews);

