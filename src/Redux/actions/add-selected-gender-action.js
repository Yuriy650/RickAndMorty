import {ADD_SELECTED_GENDER} from "../types";

const addSelectedGenderAction = (gender) => {
    return {
        type: ADD_SELECTED_GENDER,
        payload: gender
    }
}

export default addSelectedGenderAction;