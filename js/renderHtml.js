/*
[navItemsData, additionalNavItemsData, navDropdownData].forEach(
  addHeaderContent
);
addCategoriesToFooter(footerData);
*/

const header = document.querySelector('header');
const footer = document.querySelector('footer');

[
  { data: navItemsData, location: header },
  { data: additionalNavItemsData, location: header },
  { data: navDropdownData, location: header },
  { data: footerData, location: footer },
].forEach(addContent);

main.append(
  sliderContainer,
  linkListContainer,
  renderCards(cards),
  copilotSection,
  renderCards(cards2)
);