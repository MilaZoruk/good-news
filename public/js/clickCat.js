console.log('Hello')
const btn = document.querySelector('#clickCat');
console.log(btn)

btn.addEventListener('click', () => {
  document.querySelector('.clickCat').style.visibility = 'visible';
});
