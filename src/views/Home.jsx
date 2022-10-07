const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/css/main.css" />
      <link rel="stylesheet" href="/css/homeAdaptive.css" />
      <script defer src="/js/clickCat.js" />
      <script defer src="/js/home.js" />
      
      <main className="adaptive">
        <section className="section-home">
          <div className="home">
            <div className="home-text-box">
              <h1 className="home-title">
                <span className="title-part line-1">GOOD</span>
                <p><span className="title-part line-2">NEWS</span></p>
                <p><span className="title-part line-3">PORTAL</span></p>
              </h1>
              <p className="home-decription"> Enjoy discovering the world with our free of charge news application. Seacrh from more then 80 news sources and save your favorite articles in one click! </p>
              <img className="clickCat" src="/css/images/clickCat.gif" />
              <button id="clickCat" className="glow-on-hover" type="button">WANNA STAY POSITIVE?</button>
            </div>
            <div className="borderNews">
            <p id="divH"> Top news of the day </p>
            <div className="home-news-box" />
          </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};
