import {ADD_SELECTED_SPECIES} from "../types";

export const addSelectedSpeciesReducer = (state='', action) => {
    switch (action.type) {
        case ADD_SELECTED_SPECIES: {
            return action.payload
        }
    }
    return state;
}