import {ADD_EPISODE_PAGE} from "../types";

const addEpisodePageAction = (episodePage) => {
    return {
        type: ADD_EPISODE_PAGE,
        payload: episodePage
    }
}
export default addEpisodePageAction;