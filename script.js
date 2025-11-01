'use strict';
// select the element that we need
// store the selections in variables
// so we can use them over and over again

/* whenever we use querySelector with a selector, which actually matches multiple elements, only the first one will get selected. use querySelectorAll instead */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

/* 
  how to respond to keyboard events
  for that, we still need to use event listeners
  keyboard events are so-called global events
  keydown, keypress and keyup
  keydown => tuşa basar basmaz,
  keypress => tuşa basılı tutulduğunda,
  keyup => tuşa basılıp bırakıldığında
  tetiklenir.
*/

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
