const createElement = (tag, props = {}) => {
  const element = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else if (key === 'children') {
      value.forEach((child) => element.appendChild(child));
    } else {
      element[key] = value;
    }
  });
  return element;
};

const main = document.querySelector('main');

/* Card JS */

const createCardElement = ({ label, title, text, buttonText, image }) => {
  const cardElement = createElement('div', { className: 'card' });
  const cardImage = createElement('img', { src: image });
  const contentContainer = createElement('div', {
    className: 'content-container',
  });

  if (label) {
    const cardLabel = createElement('span', {
      textContent: label,
      dataset: { color: 'yellow' },
    });
    contentContainer.appendChild(cardLabel);
  }

  const cardTitle = createElement('h2', { textContent: title });
  const cardText = createElement('p', { textContent: text });
  const cardButton = createElement('button', { textContent: buttonText });

  contentContainer.append(cardTitle, cardText, cardButton);
  cardElement.append(cardImage, contentContainer);

  return cardElement;
};

const renderCards = (cardsData) => {
  const cardContainer = createElement('div', { className: 'card-container' });

  const cardElements = cardsData.map(createCardElement);
  cardContainer.append(...cardElements);
  return cardContainer;
};