const React = require('react');

const Layout = require('./Layout');

module.exports = function Account({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/account.js" />
      <link rel="stylesheet" href="/css/account.css" />
      <body className="back">
        <h1>
          Добро пожаловать в личный кабинет,
          {' '}
          { newUser }
          !
        </h1>
        <div>
          <button type="button" id="submit" className="backcolor">Выбери себе фон, подними настроение!</button>
        </div>
      </body>
    </Layout>
  );
};
