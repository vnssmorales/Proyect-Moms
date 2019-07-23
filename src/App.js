import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import  Home from './Components/home';
import Dashboard from './Components/dashboard'



function App() {
  return (
  <BrowserRouter>
    <Switch>
      
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    
    </Switch>
  </BrowserRouter>
  );
}

export default App
