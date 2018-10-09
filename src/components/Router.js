import React from 'react';
import {
  HashRouter,
  Switch,
  Route
}from 'react-router-dom';

import App from "../App";
import Recipe from "./Recipe";


const Router=()=>{
  return( 
  <HashRouter>
    <Switch>
      <Route exact path ="/" component={App}/>
      <Route path ="/recipe/:id" component={Recipe}/>
    </Switch>
  </HashRouter>
  );///recipe/:value
}


export default Router;
