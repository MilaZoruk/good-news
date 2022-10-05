const React = require('react');

const Layout = require('./Layout');

module.exports = function Home({ newUser }) {
  return (
    <Layout newUser={newUser}>
      <script defer src="/js/home.js" />

      <section className="section-home">
        <div className="home">
          <div className="home-text-box">
            <h1 className="home-title">
              <span className="title-part line-1">GOOD</span>
              <p><span className="title-part line-2">NEWS</span></p>
              <p><span className="title-part line-3">PORTAL</span></p>
            </h1>
            {/* <news portal </h2> */}
            <p className="home-decription"> Enjoy discovering the world with our free of charge news application. Seacrh from more then 80 news sources and save your favorite articles in one click! </p>
            <button className="glow-on-hover" type="button">WANNA STAY POSITIVE?</button>
            {/* <a href="#" className='home-btn'>Start serching news</a> */}
          </div>
          <div>
            <h1 id='divH'> Top news of the day </h1>
          <div className="home-news-box">
            {/* <div className="home-card">
              <img src="/css/images/image1.jpeg" className="home-card-image" alt="something" />
              <div className="card-body">
                <p className="card-text">TITLE1</p>
              </div>
            </div>
            <div className="home-card">
              <img src="/css/images/image2.jpg" className="home-card-image" alt="something" />
              <div className="card-body">
                <p className="card-text">TITLE2</p>
              </div>
            </div>
            <div className="home-card">
              <img src="/css/images/image3.jpg" className="home-card-image" alt="something" />
              <div className="card-body">
                <p className="card-text">TITLE3</p>
              </div>
            </div>
            <div className="home-card">
              <img src="/css/images/image4.jpg" className="home-card-image" alt="something" />
              <div className="card-body">
                <p className="card-text">TITLE4</p>
              </div>
            </div> */}
          </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
