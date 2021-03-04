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
import {addLocationNameReducer} from "../Redux/reducers/add-location-name-reducer";
import {addLocationTypeReducer} from "../Redux/reducers/add-location-type-reducer";
import {addLocationDimensionReducer} from "../Redux/reducers/add-location-dimension-reducer";
import {addPageReducer} from "../Redux/reducers/add-page-reducer";
import {addEpisodePageReducer} from "../Redux/reducers/add-episode-page-reducer";
import {addLocationPageReducer} from "../Redux/reducers/add-location-page-reducer";

const reducer = combineReducers({
    addSomeCharacterReducer,
    addNewEpisodeReducer,
    addNewLocationReducer,
    addSelectedGenderReducer,
    addSelectedSpeciesReducer,
    addSelectedStatusReducer,
    addEpisodesNameReducer,
    addEpisodesFilterReducer,
    addEpisodesDateReducer,
    addLocationNameReducer,
    addLocationTypeReducer,
    addLocationDimensionReducer,
    addPageReducer,
    addEpisodePageReducer,
    addLocationPageReducer
})
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store.getState());
export default store;