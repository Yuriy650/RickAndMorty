import {ADD_SELECTED_STATUS} from "../types";

export const addSelectedStatusReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_SELECTED_STATUS: {
            return action.payload;
        }
    }
    return state;
}