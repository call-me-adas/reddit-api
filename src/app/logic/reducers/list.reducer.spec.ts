import {INITIAL_STATE, reducer} from './list.reducer';
import * as listActions from '../actions/list.action';
import * as fromList from './list.reducer';

describe('list reducer', () => {

    it('should return the initial state', () => {
        // given
        const action = {type: 'UNDEFINED'};
        const initialState = {
            news: [],
            after: ''
        };

        // when
        const result = reducer(undefined, action);

        // then
        expect(result).toEqual(initialState);
    });

    it('should handle FETCH_NEWS_SUCCESS', () => {
        const mock = [];
        // when
        const action = new listActions.FetchNewsSuccess(mock);
        const state = fromList.reducer(INITIAL_STATE, action);
        // then
        expect(state.news).toEqual(mock);
    });

    it('should handle ADD_NEWS_SUCCESS', () => {
        const mock = [];
        // when
        const action = new listActions.AddNewsSuccess(mock);
        const state = fromList.reducer(INITIAL_STATE, action);
        // then
        expect(state.news).toEqual(mock);
    });

    it('should handle SET_LAST_ITEM', () => {
        const mock = 'idXXXX';
        // when
        const action = new listActions.SetLastItem(mock);
        const state = fromList.reducer(INITIAL_STATE, action);
        // then
        expect(state.after).toEqual(mock);
    });


});
