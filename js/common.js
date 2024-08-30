const createElement = (tag, props = {}) => {
  const element = document.createElement(tag);
  Object.entries(props).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else {
      element[key] = value;
    }
  });
  return element;
};

const main = document.querySelector('main');