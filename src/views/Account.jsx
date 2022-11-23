const React = require('react');

const Layout = require('./Layout');

module.exports = function Account({ newUser, data }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/css/account.css" />
      <script defer src="/js/account.js" />
      <script defer src="/js/delete.js" />

      <body className="back">
        <div>
          <button type="button" id="submit" className="backcolor">Choose your background!</button>
        </div>
        <div className="mainDiv">
          { data?.map((el) => (
            <div id="card" className="card">
              <a href={el.newsUrl}>
                <img src={el.imageUrl} className="card-img-main" alt="picture" />
              </a>

              <div id="btnPos">
                <a className="title" href="${article.url}">

                  {el.title}
                </a>
              </div>

              <button id={el.id} className="btn-like">Delete</button>
            </div>

          ))}

        </div>
      </body>
    </Layout>
  );
};
