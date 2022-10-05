const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/main.js" />
      <div className="main-div">
        <h1>
          Hello user,
          {' '}
          { newUser }
        </h1>

        <div className="input-group mb-3">
          <form className="search">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Search</button>
            <input name="key-word" type="text" className="input" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
          </form>
        </div>

        <div className="news-container">
          <ul className="news-list"></ul>
        </div>

      </div>
    </Layout>
  );
};
