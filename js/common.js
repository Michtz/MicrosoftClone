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

/* neui test funktion um alles z z ersteue und s html als json chönne z übergäh
 * nur e idee */

const createElementsFromObjects = (objectsArray) => {
  const createSingleElement = (item) => {
    const element = document.createElement(item.tagName || 'div');

    Object.entries(item).forEach(([key, value]) => {
      if (key === 'tagName' || key === 'children') return;

      if (key === 'classList' && Array.isArray(value)) {
        element.classList.add(...value);
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (key === 'dataset' && typeof value === 'object') {
        Object.assign(element.dataset, value);
      } else if (typeof value === 'object') {
        element[key] = value;
      } else {
        if (key in element) {
          element[key] = value;
        } else {
          element.setAttribute(key, String(value));
        }
      }
    });

    if (item.children) {
      const childElements = Array.isArray(item.children)
        ? createElementsFromObjects(item.children)
        : [createSingleElement(item.children)];
      childElements.forEach((child) => element.appendChild(child));
    }

    return element;
  };

  return objectsArray.map(createSingleElement);
};

const addContent = ({ data, location }) => {
  const elements = createElementsFromObjects(data);
  elements.forEach((el) => location.appendChild(el));
};