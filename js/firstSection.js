const createSections = () => {
  const main = document.querySelector('main');
  const container = document.createElement('div');
  container.className = 'slider-container';

  ['slideA', 'slideB'].forEach((id, index) => {
    const section = document.createElement('section');
    section.id = id;
    section.className = 'slide';
    section.style.transform = `translateX(${index * 100}%)`;
    container.appendChild(section);
  });

  main.appendChild(container);
};

createSections();

/*
 * Slider functionality
 * */

const slideA = document.getElementById('slideA');
const slideB = document.getElementById('slideB');
let isShowingA = true;

const switchSlides = () => {
  if (isShowingA) {
    slideA.style.transform = 'translateX(-100%)';
    slideB.style.transform = 'translateX(0)';
  } else {
    slideB.style.transform = 'translateX(-100%)';
    slideA.style.transform = 'translateX(0)';
  }

  isShowingA = !isShowingA;

  setTimeout(() => {
    if (isShowingA) {
      slideB.style.transition = 'none';
      slideB.style.transform = 'translateX(100%)';
      setTimeout(() => {
        slideB.style.transition = 'transform 1s ease-in-out';
      }, 50);
    } else {
      slideA.style.transition = 'none';
      slideA.style.transform = 'translateX(100%)';
      setTimeout(() => {
        slideA.style.transition = 'transform 1s ease-in-out';
      }, 50);
    }
  }, 1000);
};

setInterval(switchSlides, 4500);