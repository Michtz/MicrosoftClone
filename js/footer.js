/*
 * function to initialize content loading of footer
 *
 * */

const addCategoriesToFooter = (data) => {
  const footer = document.querySelector('footer');
  const elements = createElementsFromObjects(data);
  elements.forEach((el) => footer.appendChild(el));
};

addCategoriesToFooter(footerData);