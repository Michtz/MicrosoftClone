/*
 *  Copilot Section
 * Michael Venetz 2024
 * */

const copilotData = {
  header: 'Entfalten Sie Ihr Potenzial mit Microsoft Copilot',
  text: 'Mit der Leistungsfähigkeit von KI können Sie effizienter arbeiten und Ihrer Kreativität freien Lauf lassen – wo auch immer Sie sind.',
  buttonText: 'Laden Sie die Copilot-App herunter',
  imageSrc: 'assets/copilotSection.png',
};

const createCopilotSection = ({ header, text, buttonText, imageSrc }) => {
  const copilotContainer = createElement('section', {
    className: 'copilot-container',
  });
  const contentContainer = createElement('div');
  const img = createElement('img', { src: imageSrc });
  const headerElement = createElement('h2', { textContent: header });
  const textElement = createElement('p', { textContent: text });
  const button = createElement('button', { textContent: buttonText });

  contentContainer.append(headerElement, textElement, button);
  copilotContainer.append(img, contentContainer);

  return copilotContainer;
};

const copilotSection = createCopilotSection(copilotData);
main.appendChild(copilotSection);