import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import  Home from './Components/home';
import  HomeMobile from './Components/home';
import loginGoogle from './Components/firebaseLoginGoogle';


function App() {
  return (
  <BrowserRouter>
    <Switch>

    <Route exact path="/home" component={HomeMobile} />
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/loginGoogle" component={loginGoogle}/>
    
    </Switch>
  </BrowserRouter>
  );
}

export default App
