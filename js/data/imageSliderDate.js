/*
 *
 * */

let counter = 0;
let intervalId;
let isPaused = false;

const pauseInterval = () => (isPaused = true);
const resumeInterval = () => (isPaused = false);
const stopInterval = () => clearInterval(intervalId);

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

const initializeSlider = (sectionA, sectionB) => {
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

    createButton('arrow_back_ios', 'material-icons', () => {
      const logic =
        counter % 2 === 0
          ? slideActions.slideRight(sectionA, sectionB)
          : slideActions.slideRightNext(sectionA, sectionB);
      moveSlides(logic, counter - 1);
    });

    const showSlide1Button = createButton(
      'radio_button_checked',
      'material-icons',
      () => moveSlides(slideActions.slideLeftNext(sectionA, sectionB), 2)
    );
    const showSlide2Button = createButton(
      'radio_button_unchecked',
      'material-icons',
      () => moveSlides(slideActions.slideLeft(sectionA, sectionB), 1)
    );

    const placment = document.getElementById('slider-container'); // Todo: update this too
    placment.appendChild(controls);

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
            ? slideLeft(sectionA, sectionB)
            : slideLeftNext(sectionA, sectionB);
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

  return slideActions;
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

const nextSlide = () => {
  /*  const slideA = document.querySelector('.defaultSlide');
  const slideB = document.querySelector('.slide');
  counter % 2 === 0 ? slideLeft(slideA, slideB) : slideLeftNext(slideA, slideB);
  moveSlides(logic, counter + 1);*/
};

const sliderContentData = [
  {
    tagName: 'div',
    className: 'slider-container',
    id: 'slider-container',
    children: [
      {
        tagName: 'section',
        className: 'defaultSlide',
        children: [
          {
            tagName: 'img',
            src: 'assets/microsoftSale.png',
          },
          {
            tagName: 'div',
            className: 'text-container-a',
            children: [
              {
                tagName: 'h1',
                textContent: 'Back to School',
              },
              {
                tagName: 'p',
                textContent:
                  'Ausgewählte Produkte von Surface und Xbox sind für kurze Zeit im Angebot. Solange der Vorrat reicht.',
              },
              {
                tagName: 'button',
                children: [
                  {
                    tagName: 'a',
                    href: 'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25',
                    textContent: 'Jetzt Kaufen',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tagName: 'section',
        className: 'slide',
        children: [
          {
            tagName: 'img',
            src: 'assets/surfacePro.png',
          },
          {
            tagName: 'div',
            className: 'text-container-b',
            children: [
              {
                tagName: 'h1',
                textContent: 'Surface Pro Copilot+PC',
              },
              {
                tagName: 'p',
                textContent:
                  'Das Surface Pro Copilot+PC bietet Flexibilität und außergewöhnliche KI-Funktionen für maximale Produktivität.',
              },
              {
                tagName: 'button',
                children: [
                  {
                    tagName: 'a',
                    href: 'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25',
                    textContent: 'Jetzt Kaufen',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'controls',
        id: 'controls',
        children: [
          {
            tagName: 'button',
            textContent: 'play_circle',
            className: 'material-icons',
            id: 'toggle',
          },
          {
            tagName: 'button',
            textContent: 'arrow_back_ios',
            className: 'material-icons',
            id: 'prev',
          },
          {
            tagName: 'button',
            textContent: 'radio_button_checked',
            className: 'material-icons',
            id: 'first',
          },
          {
            tagName: 'button',
            textContent: 'radio_button_unchecked',
            className: 'material-icons',
            id: 'second',
          },
          {
            tagName: 'button',
            textContent: 'arrow_forward_ios',
            className: 'material-icons',
            id: 'next',
          },
        ],
      },
    ],
  },
];

const config = { childList: true, subtree: true };

const callback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const sliderContainer = document.getElementById('slider-container');
      if (sliderContainer) {
        const sectionA = sliderContainer.querySelector('.defaultSlide');
        const sectionB = sliderContainer.querySelector('.slide');

        initializeSlider(sectionA, sectionB);
        observer.disconnect();
        break;
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(document.body, config);