const React = require('react');

module.exports = function Layout({ children, newUser }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="./css/normalize.css" /> */}
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" /> */}
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
            {

               newUser ? (
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
                 )
}
          </ul>

          {/* <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>

            { newUser ? (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <div className="nav-link">
                      Привет,
                      {' '}
                      { newUser }
                      {' '}
                      !
                    </div>

                  <li className="nav-item">
                    <a className="nav-link" href="/logout">Выйти!</a>
                  </li>
                </ul>
              </div>
            ) : ('')}
            {' '}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">Registration</a>
                </li>
              </ul>
            </div>
          </div> */}
        </nav>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
};
