const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="/css/main.css" />

        <title>Privet</title>
      </head>
      <header className="header">
        <img className="logo" src="" alt="OUR LOGO" />
        <nav className="main-nav">
          <ul className="main-nav-list">

            <li><a className="main-nav-link" href="/">Home</a></li>
            { newUser ? (
              <>
                <li>
                  <a className="main-nav-link nav-link-highlight" href="#">
                    Привет,
                    {' '}
                    {newUser}
                    {' '}
                  </a>
                </li>
                <li>
                  {' '}
                  <a className="main-nav-link" href="/logout">Выйти</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/account">Личный кабинет</a>
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
