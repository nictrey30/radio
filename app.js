const list = document.querySelector('.radios');
const radios = document.querySelector('.radios li');

list.addEventListener('click', e => {
  if (e.target.classList.contains('rde-player-btn-play-pause')) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[1].classList.toggle(
      'text-danger'
    );
  }
});
