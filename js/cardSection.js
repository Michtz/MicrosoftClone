/*
 *  Card Section
 * Michael Venetz 2024
 * */

const cards = [
  {
    label: 'Neu',
    title: 'Surface Laptop, Copilot+ PC',
    text: 'Nutzen Sie mit diesem aussergewöhnlich leistungsstarken Notebook KI-Funktionen wie Live Captions und Cocreator.',
    buttonText: 'Jetzt Kaufen',
    image: 'assets/cardImg3.png',
  },
  {
    label: 'Nur im Microsoft Store',
    title: 'Xbox Series X – 2 TB',
    text: 'Die leistungsfähigste Xbox aller Zeiten mit der höchsten Bildfrequenz und blitzschnellen Ladezeiten ist bald mit einer 2 TB SSD in der Sonderedition Galaxy Black erhältlich.',
    buttonText: 'Jetzt vorbestellen',
    image: 'assets/cardImg1.png',
  },
  {
    label: 'Neu',
    title: 'Xbox Series S – 1 TB in Robot White',
    text: 'Bestelle jetzt die Xbox Series S mit 1 TB Speicherplatz in der eleganten Farbe Robot White mit 1 TB Speicherplatz zum besten Preis.',
    buttonText: 'Jetzt vorbestellen',
    image: 'assets/cardImg2.png',
  },
  {
    label: undefined,
    title: 'Xbox Controller',
    text: 'Elite, kabellos und anpassungsfähig – finde den Controller für deinen Stil.',
    buttonText: 'Jetzt Kaufen',
    image: 'assets/cardImg4.png',
  },
];

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

main.appendChild(renderCards(cards));