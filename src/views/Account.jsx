const React = require('react');

const Layout = require('./Layout');

module.exports = function Account({ newUser, data }) {
  return (
    <Layout newUser={newUser}>
      <link rel="stylesheet" href="/css/account.css" />
      <script defer src="/js/account.js" />
      <script defer src="/js/delete.js" />
      
      <body className="back">
      <div className='mainDiv'>
        { data?.map((el) => (
          <div id="card" className="card">
            <a href={el.newsUrl}>
              <img src={el.imageUrl} className="card-img-main" alt="picture" />
            </a>

            <h1>
              <a className="title" href="${article.url}">
              
                {el.title}
              </a>

            </h1>

            <button id={el.id} className="btn-like">Delete</button>
           </div>
        
        ))}

</div>
        <div>
          <button type="button" id="submit" className="backcolor">Выбери себе фон, подними настроение!</button>
        </div>
      </body>
    </Layout>
  );
};
