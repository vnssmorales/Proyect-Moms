import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import  Home from './Components/home';


function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    
    </Switch>
  </BrowserRouter>
  );
}

export default App
