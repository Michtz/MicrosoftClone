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
  sectionB.className = 'slide';
  imgB.src = 'assets/surfacePro.png';
  sectionB.appendChild(imgB);

  container.appendChild(sectionB);
};

const slideLeft = () => {
  sectionA.removeAttribute('data-slide-back');
  sectionB.removeAttribute('data-slide-back');
  sectionB.setAttribute('data-slide', 'true');
  sectionA.setAttribute('data-slide', 'true');
};

const slideLeftNext = () => {
  sectionA.removeAttribute('data-slide-back');
  sectionB.removeAttribute('data-slide-back');
  sectionB.setAttribute('data-slide', 'false');
  sectionA.setAttribute('data-slide', 'false');
};

const slideRight = () => {
  sectionA.removeAttribute('data-slide');
  sectionB.removeAttribute('data-slide');
  sectionA.setAttribute('data-slide-back', 'false');
  sectionB.setAttribute('data-slide-back', 'false');
};

const slideRightNext = () => {
  sectionA.removeAttribute('data-slide');
  sectionB.removeAttribute('data-slide');
  sectionA.setAttribute('data-slide-back', 'true');
  sectionB.setAttribute('data-slide-back', 'true');
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
  toggleButton.textContent = 'play_circle';
  toggleButton.classList.add('material-icons');

  toggleButton.onclick = () => {
    if (isPaused) {
      resumeInterval();
      toggleButton.textContent = 'pause_circle';
    } else {
      pauseInterval();
      toggleButton.textContent = 'play_circle';
    }
  };

  const checkCouter = () => {
    if (counter % 2 === 0) {
      showSlide1Button.textContent = 'radio_button_checked';
      showSlide2Button.textContent = 'radio_button_unchecked';
    } else {
      showSlide1Button.textContent = 'radio_button_unchecked';
      showSlide2Button.textContent = 'radio_button_checked';
    }
  };

  const moveSlides = (logic, newCounter) => {
    stopInterval();
    logic();
    startInterval();
    counter = newCounter;
    checkCouter();
  };

  const showSlide1Button = document.createElement('button');
  showSlide1Button.classList.add('material-icons');
  showSlide1Button.textContent = 'radio_button_checked';
  showSlide1Button.onclick = () => moveSlides(slideLeftNext, 2);

  const showSlide2Button = document.createElement('button');
  showSlide2Button.classList.add('material-icons');
  showSlide2Button.textContent = 'radio_button_unchecked';
  showSlide2Button.onclick = () => moveSlides(slideLeft, 1);

  const slideBackButton = document.createElement('button');
  slideBackButton.textContent = 'arrow_back_ios';
  slideBackButton.classList.add('material-icons');
  slideBackButton.onclick = () => {
    const logic = counter % 2 === 0 ? slideRight : slideRightNext;
    moveSlides(logic, counter - 1);
  };

  const slideForwardButton = document.createElement('button');
  slideForwardButton.textContent = 'arrow_forward_ios';
  slideForwardButton.classList.add('material-icons');
  slideForwardButton.onclick = () => {
    const logic = counter % 2 === 0 ? slideLeft : slideLeftNext;
    moveSlides(logic, counter + 1);
  };

  controls.appendChild(toggleButton);

  controls.appendChild(slideBackButton);
  controls.appendChild(showSlide1Button);
  controls.appendChild(showSlide2Button);
  controls.appendChild(slideForwardButton);
  container.appendChild(controls);
};

addControls();