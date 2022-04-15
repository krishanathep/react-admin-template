import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SiginUp() {
  // const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    // if(name === ''){
    //   alert('กรุณากรอกข้อมูลให้ถูกต้อง')
    // }else if(email === ''){
    //   alert('กรุณากรอกข้อมูลให้ถูกต้อง')
    // }else if(password === ''){
    //   alert('กรุณากรอกข้อมูลให้ถูกต้อง')
    // }

    const data = {
      name,
      email,
      password,
    };

    const resuestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch("http://127.0.0.1:8000/api/auth/register", resuestOptions)
      .then((res) => res.json())
      .then((res) => {
        if(res.status === 200){
          alert('สมัครสมาชิกเรียบร้อยแล้ว'+ res.status)
          window.location.href = "/"
        }else{
          alert('ข้อมูลไม่ถูกต้อง')
        }
      });
  }

  return (
    <div class="hold-transition register-page">
      <div class="register-box">
        <div class="register-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div class="card">
          <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>
            <form onSubmit={handleSubmit}>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full name"
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email" 
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event)=>setPassword(event.target.value)}
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              {/* <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Retype password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div> */}
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      value="agree"
                    />
                    <label for="agreeTerms">
                      I agree to the <a href="#">terms</a>
                    </label>
                  </div>
                </div>

                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>
            {/* <div class="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i>
                Sign up using Facebook
              </a>
              <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i>
                Sign up using Google+
              </a>
            </div> */}
            <Link to="/" class="text-center">
              I already have a membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
