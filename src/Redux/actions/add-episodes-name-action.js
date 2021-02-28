import {ADD_EPISODES_NAME} from "../types";

const addEpisodesNameAction = (name) => {
    return {
        type: ADD_EPISODES_NAME,
        payload: name
    }
}
export default addEpisodesNameAction;