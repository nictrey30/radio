const radioNos = document.querySelectorAll('.no');
const radioTitles = document.querySelectorAll('.radio-title');
const listItems = document.querySelectorAll('li');

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

Array.from(listItems).forEach(li => {
  li.style.padding = '2rem';
});
