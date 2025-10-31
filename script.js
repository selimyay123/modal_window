'use strict';
// select the element that we need
// store the selections in variables
// so we can use them over and over again

/* whenever we use querySelector with a selector, which actually matches multiple elements, only the first one will get selected. use querySelectorAll instead */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}
