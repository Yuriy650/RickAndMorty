import {ADD_SELECTED_GENDER} from "../types";

export const addSelectedGenderReducer = (state = '', action) => {
    switch(action.type) {
        case ADD_SELECTED_GENDER:
            return action.payload
    }
    return state;
}