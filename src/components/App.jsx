import React from 'react';
import './app.less'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { setCount } from '../reducers/reposReducer'
import Main from './main/Main';
import Card from '../components/card/Card'
import Error from './main/Error';

const App = () => {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div className='container'>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/card/:username/:reponame' component={Card}/>
                    <Route path='/error' component={Error}/>
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
