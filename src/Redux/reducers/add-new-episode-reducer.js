import {ADD_NEW_EPISODE} from "../types";

const initialState = {
    data: {
        results: []
    }
}

export const addNewEpisodeReducer = (state=initialState.data, action) => {
    switch (action.type) {
        case ADD_NEW_EPISODE:
            return {...state, results: action.payload}
    }
    return state;
}