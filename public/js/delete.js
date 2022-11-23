const mainDiv = document.querySelector('.mainDiv');
mainDiv.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    // console.log(e.target.parentNode);
    // console.log(e.target.parentNode.parentNode);
    // console.log(e.target.parentNode.parentNode.parentNode);
    const { id } = e.target;
    const response = await fetch('/delete', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    if (result.destroy === 'OK') {
      mainDiv.removeChild(e.target.parentNode);
    }
  }
});
