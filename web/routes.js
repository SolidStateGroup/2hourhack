import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import App from './components/App'; //App Wrapper
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';


window.Link = Link;


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>

        {/*Examples*/}
        <Route path="/example/sass" component={require('./components/examples/pages/SassPage')}/>
        <Route path="/example/layout" component={require('./components/examples/pages/LayoutPage')}/>


        <Route path="login" component={HomePage}/>
        <Route path="signup" component={HomePage}/>
        <Route path="404" component={NotFoundPage}/>
        <Redirect from="*" to="404"/>
    </Route>
);
