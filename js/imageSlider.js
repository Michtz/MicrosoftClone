/*
 *  Slider Section
 * Michael Venetz 2024
 * */

const sliderContainer = createElement('div', {
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

sliderContainer.append(sectionA, sectionB);

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
      counter % 2 === 0 ? slideActions.slideRight : slideActions.slideRightNext;
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

  sliderContainer.appendChild(controls);

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