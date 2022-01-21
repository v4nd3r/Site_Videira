import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Site from './site/Home';
import Admin from './admin/HomeAdmin';
import Login from './admin/Login';
import Logout from './admin/Logout';

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/admin/" component={Admin} />
            <Route exact path="/" component={Site} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
        </BrowserRouter>
    );
}

export default Routes;