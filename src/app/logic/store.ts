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

/* Auth */
export const getListELement = createSelector(getListState, fromList.getAuthToken);

