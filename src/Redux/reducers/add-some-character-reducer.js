import {ADD_SOME_CHARACTER} from "../types";

const initialState = {
    data: {
        results: []
    }

}
export const addSomeCharacterReducer = (state=initialState.data.results, action) => {
    switch (action.type) {
        case ADD_SOME_CHARACTER:
            return action.payload
    }
    return state;
}