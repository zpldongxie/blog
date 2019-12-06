/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-03 14:20:40
 * @LastEditTime: 2019-12-05 17:20:32
 * @LastEditors: zpl
 */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import LoginUser from './layouts/Login'

// import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginUser}/>
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
