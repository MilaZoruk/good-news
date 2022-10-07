const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="/css/regForm.css" />
      <link rel="stylesheet" href="/css/backReg.css" />
      <link rel="stylesheet" href="/css/loader.css" />
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <div className="login-box">

        <h2>Registration</h2>

        <form id="addUser" method="post" action="/registration">
          <div className="mb-3">
            <input type="login" className="form-control" id="exampleInputLogin" aria-describedby="emailHelp" name="login" placeholder="" />
            <label className="did-floating-label">Name</label>
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
      <svg className="gegga">
        <defs>
          <filter id="gegga">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"
              result="inreGegga"
            />
            <feComposite in="SourceGraphic" in2="inreGegga" operator="atop" />
          </filter>
        </defs>
      </svg>
      <svg className="snurra" width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="linjärGradient">
            <stop className="stopp1" offset="0" />
            <stop className="stopp2" offset="1" />
          </linearGradient>
          <linearGradient
            y2="160"
            x2="160"
            y1="40"
            x1="40"
            gradientUnits="userSpaceOnUse"
            id="gradient"
            xlinkHref="#linjärGradient"
          />
        </defs>
        <path
          className="halvan"
          d="m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64"
        />
        <circle className="strecken" cx="100" cy="100" r="64" />
      </svg>
        </form>
      </div>
    </Layout>
  );
};
