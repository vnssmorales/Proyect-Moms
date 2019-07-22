import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import  Home from './Components/home';


function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    
    </Switch>
  </BrowserRouter>
  );
}

export default App
