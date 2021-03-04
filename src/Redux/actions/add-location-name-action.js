import {ADD_LOCATION_NAME} from "../types";

const addLocationNameAction = (locationName) => {
    return {
        type: ADD_LOCATION_NAME,
        payload: locationName
    }
}
export default addLocationNameAction;