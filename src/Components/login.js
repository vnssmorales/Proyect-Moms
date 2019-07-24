import React, { Component } from 'react';
import Nav from './navbar';
import { Link}  from 'react-router-dom';
import config from './../firebase/config'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
          email: '',
          password: ''
        };
      }
    
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
      }
    
      login(e) {
        e.preventDefault();
        config.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            
        }).catch((error) => {
            console.log(error);
          });
      }
    
    
    render() {
  return (
      <React.Fragment>
  <Nav></Nav>
  <div style={{padding:"9%", backgroundColor:"#355E7E"}}>
    <div className="card">
        <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
            <hr></hr>
            <p className="text-success text-center">Some message goes here</p>
            <form>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input value={this.state.email} name="email"  onChange={this.handleChange}  className="form-control" placeholder="Email or login" type="email"></input>
                    </div> 
                </div> 
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input  onChange={this.handleChange} name="password" className="form-control" placeholder="******" type="password"></input>
                    </div> 
                </div> 
                <div className="form-group">
                <Link to="/dashboard"><button type="submit"  onClick={this.login} className="btn btn-primary btn-block"> Login  </button></Link>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block"> Google </button>
                </div> 
                <p className="text-center"> Forgot password?</p>
            </form>
        </article>
    </div> 
    </div>
    </React.Fragment>
  );
}
}

export default Login
