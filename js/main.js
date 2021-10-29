// Modal
const buttonAuf = document.querySelector('.enter'),
      modal = document.querySelector('.modalAuf'),
      buttonClose = document.querySelector('.modal-close-auf');


buttonAuf.addEventListener('click', function() {
  modal.classList.add('show');
});

buttonClose.addEventListener('click', function() {
  modal.classList.remove('show');
});

const buttonReg = document.querySelector('.registration'),
      modalReg = document.querySelector('.modalReg'),
      buttonCloseReg = document.querySelector('.modal-close-reg');


buttonReg.addEventListener('click', function() {
  modalReg.classList.add('show');
});

buttonCloseReg.addEventListener('click', function() {
  modalReg.classList.remove('show');
});


// Slider Rewievs
const slides = document.querySelectorAll('.reviews-slider-wrapper > div'),
      prev = document.querySelector('.reviews-slider-prev'),
      next = document.querySelector('.reviews-slider-next');


let slideIndex = 0;

next.addEventListener('click', function() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSelection();
});

prev.addEventListener('click', function() {
  slideIndex = (slideIndex + slides.length - 1) % slides.length;
  updateSelection();
});

function updateSelection() {
  let showing = document.querySelector('.reviews-slider-wrapper > div.showing');
  console.log(showing);

  if(showing) showing.classList.remove('showing');

  slides[slideIndex].classList.add('showing');
}

// Menu-burger
const buttonBurger = document.querySelector('.menu'),
      menu = document.querySelector('.menu-burger'),
      menuClose = document.querySelector('.menu-burger-close');

buttonBurger.addEventListener('click', function() {
  menu.classList.add('open');
});

menuClose.addEventListener('click', function() {
  menu.classList.remove('open');
});

const buttonBurgerAuf = document.querySelector('.menu-burger-enter'),
      buttonBurgerReg = document.querySelector('.menu-burger-registration');
      
buttonBurgerAuf.addEventListener('click', function() {
  modal.classList.add('show');
  menu.classList.remove('open');
});

buttonBurgerReg.addEventListener('click', function() {
  modalReg.classList.add('show');
  menu.classList.remove('open');
});






      
