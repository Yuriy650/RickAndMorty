import {ADD_LOCATION_PAGE} from "../types";

const addLocationPageAction = (locationPage) => {
    return {
        type: ADD_LOCATION_PAGE,
        payload: locationPage
    }
}
export default addLocationPageAction;