import {FETCH_NEWS_SUCCESS} from "@logic/actions/list.action";
import {NewsModel} from "@logic/models/news.model";

export interface State {
    news: Array<NewsModel>;
}

const INITIAL_STATE: State = {
    news: []
};

export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS: {
            return {
                ...state,
                news: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getNews = (state) => state.news;
