import {ADD_EPISODES_NAME} from "../types";

export const addEpisodesNameReducer = (state='', action) => {
    switch (action.type) {
        case ADD_EPISODES_NAME: {
            return action.payload
        }
    }
    return state;
}