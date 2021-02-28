import {ADD_EPISODES_FILTER} from "../types";

export const addEpisodesFilterReducer = (state='', action) => {
    switch (action.type) {
        case ADD_EPISODES_FILTER: {
            return action.payload;
        }
    }
    return state;
}