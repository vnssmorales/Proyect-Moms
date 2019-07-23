import React from 'react'

function Login() {
  return (
  
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
                        <input name="" className="form-control" placeholder="Email or login" type="email"></input>
                    </div> 
                </div> 
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input className="form-control" placeholder="******" type="password"></input>
                    </div> 
                </div> 
                <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                </div> 
                <p className="text-center"> Forgot password?</p>
            </form>
        </article>
    </div> 
  );
}

export default Login
