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
      } else if (key === 'onClick' && typeof value === 'function') {
        element.addEventListener('click', value);
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