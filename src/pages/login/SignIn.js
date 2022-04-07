import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

export default function SignIn() {

  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
      
    if(email === ''){
      alert('Email Field is Not Empty!')
    }else 
    if(password === ''){
      alert('Password Field is Not Empty!')
    }else
    if(email !== 'krishanathep@gmail.com'){
      alert('Email ไม่ถูกต้อง')
    }else 
    if(password !== 'jareanpong01'){
      alert('Password ไม่ถูกต้อง')
    }else {
      history('/home')
      window.location.reload();
    }
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    {" "}
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            {/* <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a>
            </div> */}
      
            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
           */}
            <p className="mb-0">
              <Link to="/signup" className="text-center">
              Register a new membership
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
