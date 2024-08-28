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

  // Erstellen der Steuerungselemente
  const controls = document.createElement('div');
  controls.className = 'slider-controls';

  const buttonTexts = ['Zurück', 'Slide 1', 'Slide 2', 'Vorwärts', 'Pause'];
  const buttonIds = [
    'prevButton',
    'slide1Button',
    'slide2Button',
    'nextButton',
    'pauseButton',
  ];

  buttonTexts.forEach((text, index) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.id = buttonIds[index];
    controls.appendChild(button);
  });

  main.appendChild(controls);
  main.appendChild(container);
};

createSections();

const slideA = document.getElementById('slideA');
const slideB = document.getElementById('slideB');
let isShowingA = true;
let intervalId;
let isPaused = false;

const switchSlides = (direction = 1) => {
  if (isPaused && direction === 1) return;

  if ((isShowingA && direction === 1) || (!isShowingA && direction === -1)) {
    slideA.style.transform = 'translateX(-100%)';
    slideB.style.transform = 'translateX(0)';
    isShowingA = false;
  } else {
    slideB.style.transform = 'translateX(-100%)';
    slideA.style.transform = 'translateX(0)';
    isShowingA = true;
  }

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

const showSlide = (slideNumber) => {
  if ((slideNumber === 1 && !isShowingA) || (slideNumber === 2 && isShowingA)) {
    switchSlides();
  }
};

const togglePause = () => {
  isPaused = !isPaused;
  const pauseButton = document.getElementById('pauseButton');
  pauseButton.textContent = isPaused ? 'Fortsetzen' : 'Pause';
  if (isPaused) {
    clearInterval(intervalId);
  } else {
    intervalId = setInterval(() => switchSlides(1), 4500);
  }
};

// Event-Listener für die Buttons
document
  .getElementById('prevButton')
  .addEventListener('click', () => switchSlides(-1));
document
  .getElementById('slide1Button')
  .addEventListener('click', () => showSlide(1));
document
  .getElementById('slide2Button')
  .addEventListener('click', () => showSlide(2));
document
  .getElementById('nextButton')
  .addEventListener('click', () => switchSlides(1));
document.getElementById('pauseButton').addEventListener('click', togglePause);

// Starten des Sliders
intervalId = setInterval(() => switchSlides(1), 4500);