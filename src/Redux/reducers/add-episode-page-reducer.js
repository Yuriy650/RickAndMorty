import {ADD_EPISODE_PAGE} from "../types";

export const addEpisodePageReducer = (state=1, action) => {
    switch (action.type) {
        case ADD_EPISODE_PAGE:
            return action.payload;
    }
    return state;
}