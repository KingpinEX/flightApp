import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import {Route, Switch} from "react-router";
import {Provider} from "react-redux";
import {ConnectedRouter} from "react-router-redux";
import store, {history} from './redux/configStore';

import LoginPage from "./connectedComponents/LoginPage";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        {/* didnt work needed to scrap the router :( sorry
        <ConnectedRouter history={history}>
            <div style={{height: '100%'}}>
                <Switch>
                    <Route path="/flight-list/(.*)/:flightID" component={FlightListPage}/>
                    <Route component={LoginPage}/>
                </Switch>
            </div>
        </ConnectedRouter>
        */}
        <LoginPage />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
