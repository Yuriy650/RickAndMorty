import {ADD_SELECTED_SPECIES} from "../types";

const addSelectedSpeciesAction = (species) => {
    return {
        type: ADD_SELECTED_SPECIES,
        payload: species
    }
}

export default addSelectedSpeciesAction;