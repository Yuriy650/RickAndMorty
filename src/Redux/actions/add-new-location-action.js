import {ADD_NEW_LOCATION} from "../types";

const addNewLocationsAction = (newLocations) => {
    return {
        type: ADD_NEW_LOCATION,
        payload: newLocations
    }
}

export default addNewLocationsAction;