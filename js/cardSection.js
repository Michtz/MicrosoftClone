const main = document.querySelector('main');

const addCard = (card) => {
  const cardContainer = document.createElement('div');
  const cardElement = document.createElement('div');
  const cardImage = document.createElement('img');
  const contentContainer = document.createElement('div');
  const cardLabel = document.createElement('span');
  const cardTitle = document.createElement('h2');
  const cardText = document.createElement('p');
  const cardButton = document.createElement('button');

  cardImage.src = card.image;
  contentContainer.className = 'content-container';
  cardLabel.textContent = card.label;
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
  cardContainer.appendChild(cardElement);
  main.appendChild(cardContainer);
};

const cards = [
  {
    label: 'Neu',
    title: 'Surface Laptop, Copilot+ PC',
    text: 'Nutzen Sie mit diesem aussergewöhnlich leistungsstarken Notebook KI-Funktionen wie Live Captions und Cocreator.',
    buttonText: 'Jetzt Kaufen',
    image: 'assets/microsoftSale.png',
  },
];

cards.forEach((card) => {
  addCard(card);
});