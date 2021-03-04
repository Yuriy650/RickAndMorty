import {ADD_LOCATION_DIMENSION} from "../types";

export const addLocationDimensionReducer = (state='', action) => {
    switch (action.type) {
        case ADD_LOCATION_DIMENSION: {
            return action.payload;
        }
    }
    return state;
}