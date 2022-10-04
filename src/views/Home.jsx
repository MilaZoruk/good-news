const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <h1>
        Hello user!
        {' '}
        { newUser }
      </h1>
      <div className="container">
        s
      </div>
      <script src="https://newsapi.org/v2/top-headlines?country=ru&apiKey=69f4633ca37b401eab74f2217a474d14" async defer />
    </Layout>
  );
};
