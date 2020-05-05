import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Site from './site/Home';
import Admin from './admin/HomeAdmin';

function Routes(){
    return (
        <BrowserRouter>
            <Route exact path="/admin/" component={Admin} />
            <Route exact path="/" component={Site} />
        </BrowserRouter>
    );
}

export default Routes;