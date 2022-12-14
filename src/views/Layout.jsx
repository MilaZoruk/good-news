const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta className="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" crossOrigin />

        <link rel="stylesheet" href="/css/main.css" crossOrigin="true" />
        <link rel="stylesheet" href="/css/icons.css" crossOrigin="true" />
        <link rel="stylesheet" href="/css/headerAdaptiv.css" crossOrigin="true" />
        <script defer src="/js/clickCat.js" />

        <title>Good News Portal</title>
      </head>
      <header className="header">
        <ul>
          <img className="logo" src="/css/images/logo.png" alt="OUR LOGO" />
          <a href="https://telegram.me/share/url?url=http://localhost:3000">
            <img className="telegram" src="/css/images/Telegram(1).png" alt="" />
          </a>
          <a href="https://wa.me/?text=http://localhost:3000">
            <img className="whatsUp" src="/css/images/WhatsApp(1).png" alt="" />
          </a>
        </ul>
        <nav className="main-nav">
          <ul className="main-nav-list">

            <li><a className="main-nav-link" href="/">Home</a></li>
            <li><a className="main-nav-link" href="/main">News</a></li>

            { newUser ? (
              <>

                <li className="nav-item">
                  <a className="main-nav-link" href="/account">Account</a>
                </li>
                <li>
                  {' '}
                  <a className="main-nav-link" href="/logout">Logout</a>
                </li>
                <li>
                  <a className="main-nav-link nav-link-highlight" href="#">
                    Hey,
                    {' '}
                    {newUser}
                    {' '}
                  </a>
                </li>
              </>
            )
              : (
                <>
                  <li>
                    <a className="main-nav-link" href="/login">Login</a>
                  </li>
                  <li>
                    <a className="main-nav-link" href="/registration">Registration</a>
                  </li>
                </>
              )}
          </ul>

        </nav>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
};
