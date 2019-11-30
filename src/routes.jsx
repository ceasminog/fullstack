import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App2 from "./App";
import {ToDoList} from "./views/todo";
import {STRUCTURE} from "./constants";
import {_Names} from "./components/Names"
const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App2}/>
        <Route path={STRUCTURE.breeds.route} component={ToDoList}/>
        <Route path={STRUCTURE.names.route} component={_Names}/>

    </Switch>
);

export default withRouter(MainRouter);
