const main = document.querySelector('main');
const cardContainer = document.createElement('div');
cardContainer.className = 'card-container';

const addCard = (card) => {
  const cardElement = document.createElement('div');
  const cardImage = document.createElement('img');
  const contentContainer = document.createElement('div');
  const cardLabel = document.createElement('span');
  const cardTitle = document.createElement('h2');
  const cardText = document.createElement('p');
  const cardButton = document.createElement('button');

  cardImage.src = card.image;
  contentContainer.className = 'content-container';
  if (card.label) cardLabel.textContent = card.label;
  cardTitle.textContent = card.title;
  cardText.textContent = card.text;
  cardButton.textContent = card.buttonText;

  contentContainer.appendChild(cardLabel);
  contentContainer.appendChild(cardTitle);
  contentContainer.appendChild(cardText);
  contentContainer.appendChild(cardButton);

  cardElement.appendChild(cardImage);
  cardElement.appendChild(contentContainer);

  cardElement.className = 'card';

  return cardElement;
};

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

cards.forEach((card) => {
  cardContainer.appendChild(addCard(card));
});
main.appendChild(cardContainer);