import {ADD_NEW_EPISODE} from "../types";

const initialState = {
    data: {
        results: []
    }
}

export const addNewEpisodeReducer = (state=initialState.data.results, action) => {
    switch (action.type) {
        case ADD_NEW_EPISODE:
            return action.payload
    }
    return state;
}