
export interface State {
    loading: boolean;
    _id: string;
    token: { token: string, exp: number, iat: number };
    name: string;
    permissions: string[];
    role: string;
}

const INITIAL_STATE: State = {
    _id: null,
    name: null,
    role: null,
    permissions: [],
    token: {token: null, exp: null, iat: null},
    loading: false
};

export function reducer(state: State = INITIAL_STATE, action) {
    switch (action.type) {

        default: {
            return state;
        }
    }
}

export const getAuthToken = (state) => state.token;
