import {ADD_NEW_LOCATION} from "../types";
const initialState = {
    data: {
        results: []
    }
}
export const addNewLocationReducer = (state=initialState.data.results, action) => {
    switch (action.type) {
        case ADD_NEW_LOCATION:
            return action.payload
    }
    return state;
}