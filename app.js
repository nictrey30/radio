const radioNos = document.querySelectorAll('.no');
const radioTitles = document.querySelectorAll('.radio-title');
let counter = 1;
Array.from(radioNos).forEach(no => {
  no.style.fontSize = '1.4rem';
  no.textContent = counter;
  counter++;
});
Array.from(radioTitles).forEach(radio => {
  radio.classList.add('bigger');
  radio.classList.add('text-secondary');
});
