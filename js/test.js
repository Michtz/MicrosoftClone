const main = document.querySelector('main');
const container = document.createElement('div');

const sectionA = document.createElement('section');
const imgA = document.createElement('img');

const sectionB = document.createElement('section');
const imgB = document.createElement('img');

const createFirstSection = () => {
  imgA.src = 'assets/microsoftSale.png';
  sectionA.appendChild(imgA);
  sectionA.className = 'defaultSlide';
  container.appendChild(sectionA);
  container.id = 'slider-container';
  container.className = 'slider-container';

  main.appendChild(container);
};

createFirstSection();

const addSecondSlide = () => {
  const url = 'assets/surfacePro.png';

  sectionB.className = 'slide';
  imgB.src = url;
  sectionB.appendChild(imgB);

  container.appendChild(sectionB);
};

const slideLeft = () => {
  sectionB.setAttribute('data-slide', 'true');
  sectionA.setAttribute('data-slide', 'true');
};

const slideLeftNext = () => {
  sectionB.setAttribute('data-slide', 'false');
  sectionA.setAttribute('data-slide', 'false');
};

addSecondSlide();
let counter = 0;
let intervalId;
let isPaused = false;

function startInterval() {
  intervalId = setInterval(() => {
    if (!isPaused) {
      if (counter % 2 === 0) {
        slideLeft();
      } else {
        slideLeftNext();
      }
      counter++;
    }
  }, 5000);
}

function pauseInterval() {
  isPaused = true;
}

function resumeInterval() {
  isPaused = false;
}

function stopInterval() {
  clearInterval(intervalId);
}

startInterval();

const addControls = () => {
  const controls = document.createElement('div');
  controls.className = 'controls';
  controls.id = 'controls';

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Pause';
  toggleButton.addEventListener('click', () => {
    if (isPaused) {
      resumeInterval();
      toggleButton.textContent = 'Pause';
    } else {
      pauseInterval();
      toggleButton.textContent = 'Play';
    }
  });

  const showSlide1Button = document.createElement('button');
  showSlide1Button.textContent = '1';
  showSlide1Button.addEventListener('click', () => {
    stopInterval();
    sectionA.setAttribute('data-slide', 'false');
    sectionB.setAttribute('data-slide', 'false');
    startInterval();
  });

  const showSlide2Button = document.createElement('button');
  showSlide2Button.textContent = '2';
  showSlide2Button.addEventListener('click', () => {
    stopInterval();
    sectionA.setAttribute('data-slide', 'true');
    sectionB.setAttribute('data-slide', 'true');
    startInterval();
  });

  const nextSlideButton = document.createElement('button');
  nextSlideButton.textContent = 'Next';
  nextSlideButton.addEventListener('click', () => {
    stopInterval();
    if (counter % 2 === 0) {
      slideLeft();
    } else {
      slideLeftNext();
    }
    counter++;
    startInterval();
  });

  controls.appendChild(showSlide1Button);
  controls.appendChild(showSlide2Button);
  controls.appendChild(nextSlideButton);
  controls.appendChild(toggleButton);
  container.appendChild(controls);
};

addControls();