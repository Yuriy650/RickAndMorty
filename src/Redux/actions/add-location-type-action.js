import {ADD_LOCATION_TYPE} from "../types";

const addLocationTypeAction = (locationType) => {
    return {
        type: ADD_LOCATION_TYPE,
        payload: locationType
    }
}

export default addLocationTypeAction;