import {ADD_SOME_CHARACTER} from "../types";

const addSomeCharacterAction = (someCharacter) => {
    return {
        type: ADD_SOME_CHARACTER,
        payload: someCharacter
    }
}

export default addSomeCharacterAction;