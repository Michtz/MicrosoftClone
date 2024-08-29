const sliderJS = () => {
  const createElement = (tag, props = {}) => {
    const element = document.createElement(tag);
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'textContent') {
        element.textContent = value;
      } else {
        element[key] = value;
      }
    });
    return element;
  };

  const main = document.querySelector('main');
  const container = createElement('div', {
    id: 'slider-container',
    className: 'slider-container',
  });

  const createSlide = (className, imgSrc, title, text, buttonText, href) => {
    const section = createElement('section', { className });
    const img = createElement('img', { src: imgSrc });
    const div = createElement('div', {
      className: `text-container-${className === 'defaultSlide' ? 'a' : 'b'}`,
    });
    const h1 = createElement('h1', { textContent: title });
    const p = createElement('p', { textContent: text });
    const button = createElement('button');
    const a = createElement('a', { href, textContent: buttonText });

    button.appendChild(a);
    div.append(h1, p, button);
    section.append(img, div);

    return section;
  };

  const sectionA = createSlide(
    'defaultSlide',
    'assets/microsoftSale.png',
    'Back to School',
    'Ausgewählte Produkte von Surface und Xbox sind für kurze Zeit im Angebot. Solange der Vorrat reicht.',
    'Jetzt Kaufen',
    'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25'
  );

  const sectionB = createSlide(
    'slide',
    'assets/surfacePro.png',
    'Surface Pro Copilot+PC',
    'Das Surface Pro Copilot+PC bietet Flexibilität und außergewöhnliche KI-Funktionen für maximale Produktivität.',
    'Jetzt Kaufen',
    'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25'
  );

  container.append(sectionA, sectionB);
  main.appendChild(container);

  const slideActions = {
    slideLeft: () => {
      sectionA.removeAttribute('data-slide-back');
      sectionB.removeAttribute('data-slide-back');
      sectionB.setAttribute('data-slide', 'true');
      sectionA.setAttribute('data-slide', 'true');
    },
    slideLeftNext: () => {
      sectionA.removeAttribute('data-slide-back');
      sectionB.removeAttribute('data-slide-back');
      sectionB.setAttribute('data-slide', 'false');
      sectionA.setAttribute('data-slide', 'false');
    },
    slideRight: () => {
      sectionA.removeAttribute('data-slide');
      sectionB.removeAttribute('data-slide');
      sectionA.setAttribute('data-slide-back', 'false');
      sectionB.setAttribute('data-slide-back', 'false');
    },
    slideRightNext: () => {
      sectionA.removeAttribute('data-slide');
      sectionB.removeAttribute('data-slide');
      sectionA.setAttribute('data-slide-back', 'true');
      sectionB.setAttribute('data-slide-back', 'true');
    },
  };

  let counter = 0;
  let intervalId;
  let isPaused = false;

  const pauseInterval = () => (isPaused = true);
  const resumeInterval = () => (isPaused = false);
  const stopInterval = () => clearInterval(intervalId);

  const addControls = () => {
    const controls = createElement('div', {
      className: 'controls',
      id: 'controls',
    });

    const createButton = (text, className, onClick) => {
      const button = createElement('button', {
        textContent: text,
        className,
        onclick: onClick,
      });
      controls.appendChild(button);
      return button;
    };

    const toggleButton = createButton('play_circle', 'material-icons', () => {
      if (isPaused) {
        resumeInterval();
        toggleButton.textContent = 'pause_circle';
      } else {
        pauseInterval();
        toggleButton.textContent = 'play_circle';
      }
    });

    createButton('arrow_back_ios', 'material-icons', () => {
      const logic =
        counter % 2 === 0
          ? slideActions.slideRight
          : slideActions.slideRightNext;
      moveSlides(logic, counter - 1);
    });

    const showSlide1Button = createButton(
      'radio_button_checked',
      'material-icons',
      () => moveSlides(slideActions.slideLeftNext, 2)
    );
    const showSlide2Button = createButton(
      'radio_button_unchecked',
      'material-icons',
      () => moveSlides(slideActions.slideLeft, 1)
    );

    createButton('arrow_forward_ios', 'material-icons', () => {
      const logic =
        counter % 2 === 0 ? slideActions.slideLeft : slideActions.slideLeftNext;
      moveSlides(logic, counter + 1);
    });

    container.appendChild(controls);

    const checkCounter = () => {
      showSlide1Button.textContent =
        counter % 2 === 0 ? 'radio_button_checked' : 'radio_button_unchecked';
      showSlide2Button.textContent =
        counter % 2 === 0 ? 'radio_button_unchecked' : 'radio_button_checked';
    };

    const startInterval = () => {
      intervalId = setInterval(() => {
        if (!isPaused) {
          counter % 2 === 0
            ? slideActions.slideLeft()
            : slideActions.slideLeftNext();
          counter++;
          checkCounter();
        }
      }, 5000);
    };

    const moveSlides = (logic, newCounter) => {
      stopInterval();
      logic();
      startInterval();
      counter = newCounter;
      checkCounter();
    };

    startInterval();
  };

  addControls();
};

sliderJS();

/*

first version to test
but refactored code is on top i think it looks cleaner and is easier to read

//
//
const main = document.querySelector('main');
const container = document.createElement('div');

const sectionA = document.createElement('section');
const imgA = document.createElement('img');
const divA = document.createElement('div');
const h1A = document.createElement('h1');
const pA = document.createElement('p');
const buttonA = document.createElement('button');
const aA = document.createElement('a');

const sectionB = document.createElement('section');
const imgB = document.createElement('img');
const divB = document.createElement('div');
const h1B = document.createElement('h1');
const pB = document.createElement('p');
const buttonB = document.createElement('button');
const aB = document.createElement('a');

const createFirstSection = () => {
  h1A.textContent = 'Back to School';
  pA.textContent =
    'Ausgewählte Produkte von Surface und Xbox sind für kurze Zeit im Angebot. Solange der Vorrat reicht.';
  aA.textContent = 'Jetzt Kaufen';

  aA.href =
    'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25';
  buttonA.appendChild(aA);
  divA.appendChild(h1A);
  divA.appendChild(pA);
  divA.appendChild(buttonA);

  divA.className = 'text-container-a';
  imgA.src = 'assets/microsoftSale.png';

  sectionA.appendChild(imgA);
  sectionA.appendChild(divA);
  sectionA.className = 'defaultSlide';
  container.appendChild(sectionA);
  container.id = 'slider-container';
  container.className = 'slider-container';

  main.appendChild(container);
};

createFirstSection();

const addSecondSlide = () => {
  h1B.textContent = 'Surface Pro Copilot+PC';
  pB.textContent =
    'Das Surface Pro Copilot+PC bietet Flexibilität und außergewöhnliche KI-Funktionen für maximale Produktivität.';
  aB.textContent = 'Jetzt Kaufen';

  aB.href =
    'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25';
  buttonB.appendChild(aB);
  divB.appendChild(h1B);
  divB.appendChild(pB);
  divB.appendChild(buttonB);

  divB.className = 'text-container-b';

  sectionB.appendChild(imgB);
  sectionB.appendChild(divB);
  sectionB.className = 'slide';
  imgB.src = 'assets/surfacePro.png';
  sectionB.appendChild(imgB);

  container.appendChild(sectionB);
};

addSecondSlide();

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

addControls();*/