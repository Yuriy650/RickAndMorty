import {ADD_PAGE} from "../types";

const addPageAction = (page) => {
    return {
        type: ADD_PAGE,
        payload: page
    }
}

export default addPageAction;