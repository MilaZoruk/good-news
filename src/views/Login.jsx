const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/login.css" />
      
      <div className="login-box">

        <h2>Login</h2>

        <form method="post" action="/login">
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder=""/>
            <label class="did-floating-label">Email address</label>
          </div>

          <div className="mb-3" id="userPas">
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder=""/>
            <label class="did-floating-label">Password</label>
          </div>

            <div className="button-form">
            <button type="submit" className="btn btn-primary" id="submit">Submit</button>

            <div id="register">
              <p>Don't have an account? </p>
              {' '}
              <p><a href="/registration">Registration</a></p>
              
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
