import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import recorderReducer from './recorder';
import peopleReducer from './people';
import modeReducer from './mode';

const rootReducer = combineReducers({
  recorder: recorderReducer,
  people: peopleReducer,
  mode: modeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
