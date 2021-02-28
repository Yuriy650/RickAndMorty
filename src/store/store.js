import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {addSomeCharacterReducer} from "../Redux/reducers/add-some-character-reducer";
import {addNewEpisodeReducer} from "../Redux/reducers/add-new-episode-reducer";
import {addNewLocationReducer} from "../Redux/reducers/add-new-location-reducer";
import {addSelectedGenderReducer} from "../Redux/reducers/add-selected-gender-reducer";
import {addSelectedSpeciesReducer} from "../Redux/reducers/add-selected-species-reducer";
import {addSelectedStatusReducer} from "../Redux/reducers/add-selected-status-reducer";
import {addEpisodesNameReducer} from "../Redux/reducers/add-episodes-name-reducer";
import {addEpisodesFilterReducer} from "../Redux/reducers/add-episodes-filter-reducer";
import {addEpisodesDateReducer} from "../Redux/reducers/add-episodes-date-reducer";

const reducer = combineReducers({
    addSomeCharacterReducer,
    addNewEpisodeReducer,
    addNewLocationReducer,
    addSelectedGenderReducer,
    addSelectedSpeciesReducer,
    addSelectedStatusReducer,
    addEpisodesNameReducer,
    addEpisodesFilterReducer,
    addEpisodesDateReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store.getState());
export default store;