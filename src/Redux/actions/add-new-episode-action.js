import {ADD_NEW_EPISODE} from "../types";

const addNewEpisodeAction = (newEpisode) => {
    return {
        type: ADD_NEW_EPISODE,
        payload: newEpisode
    }
}

export default addNewEpisodeAction;