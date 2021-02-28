import {ADD_EPISODES_DATE} from "../types";

const addEpisodesDateAction = (findDate) => {
    return {
        type: ADD_EPISODES_DATE,
        payload: findDate
    }
}

export default addEpisodesDateAction;