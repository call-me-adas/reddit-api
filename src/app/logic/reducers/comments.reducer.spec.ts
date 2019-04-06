import {INITIAL_STATE, reducer} from './comments.reducer';
import * as commentsActions from '../actions/comments.action';
import * as fromComments from './comments.reducer';

describe('comments reducer', () => {

    it('should return the initial state', () => {
        // given
        const action = {type: 'UNDEFINED'};
        const initialState = {
            article: null,
            comments: null
        };

        // when
        const result = reducer(undefined, action);

        // then
        expect(result).toEqual(initialState);
    });

    it('should handle FETCH_COMMENTS_SUCCESS', () => {
        const mock = {data: 'Listing'};
        // when
        const action = new commentsActions.FetchCommentsSuccess({data: 'Listing'});
        const state = fromComments.reducer(INITIAL_STATE, action);
        // then
        expect(state.comments).toEqual(mock);
    });

    it('should handle FETCH_ARTICLE_SUCCESS', () => {
        const mock = [];
        // when
        const action = new commentsActions.FetchArticleSuccess(mock);
        const state = fromComments.reducer(INITIAL_STATE, action);
        // then
        expect(state.article).toEqual(mock);
    });


});
