const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/regForm.css" />

      <div className="login-box">

      <h2>Registration</h2>

      <form id="addUser" method="post" action="/registration">
        <div className="mb-3">
          <input type="login" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" name="login" placeholder="" />
          <label  className="did-floating-label">Name</label>
        </div>

        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="" />
          <label className="did-floating-label">Email address</label>
        </div>

        <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="" />
          <label className="did-floating-label">Password</label>
        </div>

        <div className="button-form" />
        <button type="submit" className="btn btn-primary" id="submit">Submit</button>
      </form>
      </div>
    </Layout>
  );
};
