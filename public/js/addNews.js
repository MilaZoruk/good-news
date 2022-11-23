const mainDiv = document.querySelector('.news-container');

mainDiv.addEventListener('click', async (e) => {
  // e.preventDefault();

  if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'LIKE') {
    const closestParent = e.target.closest('#card');
    const newsUrl = closestParent.children[0].href;
    const imageUrl = closestParent.children[0].children[0].currentSrc;
    const title = closestParent.children[1].innerText;

    const response = await fetch('/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, imageUrl, newsUrl }),
    });

    const result = await response.json();
    console.log(result);
  }
});
//   }