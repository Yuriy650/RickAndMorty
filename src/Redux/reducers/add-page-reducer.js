import {ADD_PAGE} from "../types";

export const addPageReducer = (state=1, action) => {
    switch (action.type) {
        case ADD_PAGE:
            return action.payload
    }
    return state;

}