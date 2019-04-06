import {FETCH_ARTICLE_SUCCESS, FETCH_COMMENTS_SUCCESS} from "@logic/actions/comments.action";

export interface State {
    article: any
    comments: any;
}

const INITIAL_STATE: State = {
    article: null,
    comments: null
};

export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: action.payload
            };
        }

        case FETCH_ARTICLE_SUCCESS: {
            return {
                ...state,
                article: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getArticle = (state) => state.article;
export const getComments = (state) => state.comments;
