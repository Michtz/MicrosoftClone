// Hilfsfunktion zum Erstellen von Elementen (wiederverwendet aus dem vorherigen Code)
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

const linkListJS = () => {
  const main = document.querySelector('main');
  const container = createElement('div', { className: 'link-list-container' });
  const section = createElement('section', { className: 'link-list' });

  const items = [
    {
      asset: 'assets/Link-List-Icons-Surface-Devices.svg',
      title: 'Surface-Geräte kaufen',
      href: 'https://www.microsoft.com/de-ch/store/collections/surfacelist?icid=MSCOM_QL_Surface',
    },
    {
      asset: 'assets/Link-List-Icons-Xbox-Games-Consoles.svg',
      title: 'Xbox-Spiele und Konsolen kaufen',
      href: 'https://www.microsoft.com/de-ch/microsoft-365?icid=MSCOM_QL_Office365',
    },
    {
      asset: 'assets/Link-List-Icons-Microsoft-365.svg',
      title: 'Wählen Sie Ihr Microsoft 365',
      href: 'https://www.microsoft.com/de-ch/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365',
    },
    {
      asset: 'assets/Link-List-Icons-Accessories.svg',
      title: 'Zubehör kaufen',
      href: 'https://www.microsoft.com/de-ch/store/b/accessories?icid=MSCOM_QL_Accessories',
    },
    {
      asset: 'assets/Link-List-Icons-Business.svg',
      title: 'Für Unternehmen',
      href: 'https://www.microsoft.com/de-ch/store/b/business?icid=MSCOM_QL_Business',
    },
    {
      asset: 'assets/Book_Icon_40x40.webp',
      title: 'Back to School Angebote',
      href: 'https://www.microsoft.com/de-ch/store/b/sale?icid=MSCOM_QL_BTS',
    },
  ];

  const createLinkItem = ({ asset, title, href }) => {
    const a = createElement('a', { href, textContent: title });
    const img = createElement('img', { src: asset, alt: title });
    a.insertBefore(img, a.firstChild);
    return a;
  };

  items.forEach((item) => {
    section.appendChild(createLinkItem(item));
  });

  container.appendChild(section);
  main.appendChild(container);
};

linkListJS();