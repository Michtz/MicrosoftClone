const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

[
  { data: navItemsData, location: header },
  { data: additionalNavItemsData, location: header },
  { data: navDropdownData, location: header },
  { data: sliderContentData, location: main },
  { data: linkSectionContent, location: main },
  { data: cardsOneData, location: main },
  { data: copilotData, location: main },
  { data: cardsTwoData, location: main },
  { data: footerData, location: footer },
].forEach(addContent);

const toggleButton = document.getElementById('toggle');
const nextButton = document.getElementById('next');

toggleButton.addEventListener('click', toggleAction);
/*
nextButton.addEventListener('click', nextSlide);*/