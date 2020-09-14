import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GifDetails from '../components/gifDetails/GifDetails';
import App from '../App';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ App } exact />
                <Route path="/details/:id" component={ GifDetails } />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;