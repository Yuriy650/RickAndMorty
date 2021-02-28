import {ADD_EPISODES_DATE} from "../types";

export const addEpisodesDateReducer = (state='', action) => {
    switch (action.type) {
        case ADD_EPISODES_DATE: {
            return action.payload;
        }
    }
    return state;
}