import {ADD_LOCATION_NAME} from "../types";

export const addLocationNameReducer = (state='', action) => {
    switch (action.type) {
        case ADD_LOCATION_NAME: {
            return action.payload;
        }
    }
    return state;
}