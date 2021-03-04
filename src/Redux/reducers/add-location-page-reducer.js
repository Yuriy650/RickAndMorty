import {ADD_LOCATION_PAGE} from "../types";

export const addLocationPageReducer = (state=1, action) => {
    switch (action.type) {
        case ADD_LOCATION_PAGE:
            return action.payload;
    }
    return state;
}