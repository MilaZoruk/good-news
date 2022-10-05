const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/home.js" />
      <h1>
        Hello user!
        {' '}
        { newUser }
      </h1>
      <div className="container">
      </div>
    </Layout>
  );
};
