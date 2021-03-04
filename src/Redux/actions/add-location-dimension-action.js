import {ADD_LOCATION_DIMENSION} from "../types";

const addLocationDimensionAction = (locationDimension) => {
    return {
        type: ADD_LOCATION_DIMENSION,
        payload: locationDimension
    }
}
export default addLocationDimensionAction;