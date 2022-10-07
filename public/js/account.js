// UserAccount
const btn = document.querySelector('#submit');
// console.log(btn);
btn.addEventListener('click', () => {
  const hexnumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexcode1 = '';
  let hexcode2 = '';
  let randomIndex = 0;

  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * hexnumbers.length);
    hexcode1 += hexnumbers[randomIndex];
    randomIndex = Math.floor(Math.random() * hexnumbers.length);
    hexcode2 += hexnumbers[randomIndex];
  }
  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
});