import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import users from './reducers/users';
import flights from './reducers/flights';

const mainReducer = combineReducers({
    // here we will insert our reducers
    router: routerReducer,
    users,
    flights,
});

export default mainReducer;