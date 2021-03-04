import {ADD_LOCATION_TYPE} from "../types";

export const addLocationTypeReducer = (state='', action) => {
    switch (action.type) {
        case ADD_LOCATION_TYPE: {
            return action.payload;
        }
    }
    return state;
}