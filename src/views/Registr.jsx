const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <form id="addUser" method="post" action="/registration">
        <div className="mb-3">
          <label htmlFor="exampleInputLogin" className="form-label">Login</label>
          <input type="login" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" name="login"/>
          <div id="loginHelp" className="form-text">Your name.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};