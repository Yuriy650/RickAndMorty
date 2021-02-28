import {ADD_EPISODES_FILTER} from "../types";

const addEpisodesFilterAction = (findEpisode) => {
    return {
        type: ADD_EPISODES_FILTER,
        payload: findEpisode
    }
}

export default addEpisodesFilterAction;