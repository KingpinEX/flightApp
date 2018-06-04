import { createStore , applyMiddleware , compose } from "redux";
import { createLogger } from 'redux-logger';
import mainReducer from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

history.listen( location => {
    // here we can listen to state changes
});

// redux logs in console
const middleware = applyMiddleware(createLogger());

// this part will activate redux chrome extension for debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, {}, composeEnhancers(middleware) );

export default store;


