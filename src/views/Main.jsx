//('это ручки от Game') везде меняем game на мейн

const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="./css/publicStyles.css" />
      <script defer src="/js/publicScript.js" />
      <div className="main-div">
        <h1>
          Hello user,
          {' '}
          { newUser }
        </h1>
        <p />
        <button className="button-p1">P1</button>
        <button className="button-p2">P2</button>
        <table className="racer_table">
          <tr id="player1_strip">
            <td className="active" />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr id="player2_strip">
            <td className="active" />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
        </table>
      </div>
    </Layout>
  );
};