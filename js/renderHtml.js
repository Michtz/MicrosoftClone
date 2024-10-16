const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

/*
 * Import content
 * */

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

/*
 * slider logic
 * */

const toggleButton = document.getElementById('toggle');
const prevButton = document.getElementById('prev');
const firstButton = document.getElementById('first');
const secondButton = document.getElementById('second');
const nextButton = document.getElementById('next');

toggleButton.addEventListener('click', toggleAction);
nextButton.addEventListener('click', nextSlide);
firstButton.addEventListener('click', showSlide1);
secondButton.addEventListener('click', showSlide2);
prevButton.addEventListener('click', prevSlide);

const slideA = document.querySelector('.defaultSlide');
const slideB = document.querySelector('.slide');

startInterval(slideA, slideB);

window.addEventListener('scroll', () => {
  const scrollY = document.documentElement.scrollTop;
  if (scrollY > 620) document.querySelector('.top-button').style.opacity = '1';
  else document.querySelector('.top-button').style.opacity = '0';
});
