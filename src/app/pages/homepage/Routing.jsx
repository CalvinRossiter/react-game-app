import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import HomePage from './Homepage';
import TicTacToe from '../TicTacToe/TicTacToe';
import PageNotFound from '../PageNotFound';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route exact path = '/home'>
                    <HomePage />
                </Route>
                <Route path='/TicTacToe' component={TicTacToe} />
                <Route path='*' component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
