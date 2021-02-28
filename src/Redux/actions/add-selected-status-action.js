import {ADD_SELECTED_STATUS} from "../types";

const addSelectedStatusAction = (status) => {
    return {
        type: ADD_SELECTED_STATUS,
        payload: status
    }
}

export default addSelectedStatusAction;