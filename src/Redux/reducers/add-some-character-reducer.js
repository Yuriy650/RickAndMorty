import {ADD_SOME_CHARACTER} from "../types";

const initialState = {
    data: {
        results: []
    }

}
export const addSomeCharacterReducer = (state=initialState.data, action) => {
    switch (action.type) {
        case ADD_SOME_CHARACTER:
            return {...state, results: action.payload}
    }
    return state;
}