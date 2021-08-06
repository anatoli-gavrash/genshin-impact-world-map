import { compose, combineReducers, createStore } from 'redux';
import genshinImpactWorldMapReducer from './reducers/genshin-impact-world-map-reducer.jsx';

const rootReducer = combineReducers({
  worldMapStore: genshinImpactWorldMapReducer,
});

const storage = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default storage;