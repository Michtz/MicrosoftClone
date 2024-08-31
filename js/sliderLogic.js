/*
 * slider function and content
 * */

let counter = 0;
let intervall;
let isPaused = false;

const pauseInterval = () => (isPaused = true);
const resumeInterval = () => (isPaused = false);
const stopInterval = () => clearInterval(intervall);

const slideLeft = (sectionA, sectionB) => {
  sectionA.removeAttribute('data-slide-back');
  sectionB.removeAttribute('data-slide-back');
  sectionB.setAttribute('data-slide', 'true');
  sectionA.setAttribute('data-slide', 'true');
};

const slideLeftNext = (sectionA, sectionB) => {
  sectionA.removeAttribute('data-slide-back');
  sectionB.removeAttribute('data-slide-back');
  sectionB.setAttribute('data-slide', 'false');
  sectionA.setAttribute('data-slide', 'false');
};

const slideRight = (sectionA, sectionB) => {
  sectionA.removeAttribute('data-slide');
  sectionB.removeAttribute('data-slide');
  sectionA.setAttribute('data-slide-back', 'false');
  sectionB.setAttribute('data-slide-back', 'false');
};

const slideRightNext = (sectionA, sectionB) => {
  sectionA.removeAttribute('data-slide');
  sectionB.removeAttribute('data-slide');
  sectionA.setAttribute('data-slide-back', 'true');
  sectionB.setAttribute('data-slide-back', 'true');
};

const checkCounter = () => {
  const slide1Button = document.getElementById('first');
  const slide2Button = document.getElementById('second');
  const isEven = counter % 2 === 0;
  slide1Button.textContent = isEven
    ? 'radio_button_checked'
    : 'radio_button_unchecked';
  slide2Button.textContent = isEven
    ? 'radio_button_unchecked'
    : 'radio_button_checked';
};

const startInterval = (slideA, slideB) => {
  intervall = setInterval(() => {
    if (!isPaused) {
      counter % 2 === 0
        ? slideLeft(slideA, slideB)
        : slideLeftNext(slideA, slideB);
      counter++;
      checkCounter();
    }
  }, 5000);
};

const moveSlides = (newCounter, slideA, slideB, logic) => {
  stopInterval(); // !! is needed to deactivate the old interval , so the new can start smoothly
  if (logic) logic(slideA, slideB);
  startInterval(slideA, slideB);
  counter = newCounter;
  checkCounter();
};

const toggleAction = () => {
  if (isPaused) {
    resumeInterval();
    toggleButton.textContent = 'pause_circle';
  } else {
    pauseInterval();
    toggleButton.textContent = 'play_circle';
  }
};

const prevSlide = () => {
  const slideA = document.querySelector('.defaultSlide');
  const slideB = document.querySelector('.slide');
  const isEven = counter % 2 === 0;
  moveSlides(counter + 1, slideA, slideB, isEven ? slideRight : slideRightNext);
};

const nextSlide = () => {
  const slideA = document.querySelector('.defaultSlide');
  const slideB = document.querySelector('.slide');
  const isEven = counter % 2 === 0;
  moveSlides(counter + 1, slideA, slideB, isEven ? slideLeft : slideLeftNext);
};

const showSlide1 = () => {
  const slideA = document.querySelector('.defaultSlide');
  const slideB = document.querySelector('.slide');
  moveSlides(2, slideA, slideB, slideLeftNext);
};

const showSlide2 = () => {
  const slideA = document.querySelector('.defaultSlide');
  const slideB = document.querySelector('.slide');
  moveSlides(1, slideA, slideB, slideLeft);
};