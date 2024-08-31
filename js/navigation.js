/*
 *  Navigation
 * Michael Venetz 2024
 * */

// Todo: refactor

const navItems = [
  {
    href: 'https://www.microsoft.com/de-ch/microsoft-teams/group-chat-software',
    text: 'Microsoft 365',
  },
  {
    href: 'https://www.microsoft.com/de-ch/microsoft-teams/group-chat-software',
    text: 'Teams',
  },
  { href: 'https://copilot.microsoft.com/', text: 'Copilot' },
  { href: 'https://www.microsoft.com/de-ch/windows/', text: 'Windows' },
  { href: 'https://www.microsoft.com/surface', text: 'Surface' },
  { href: 'https://www.xbox.com/', text: 'Xbox' },
  {
    href: 'https://www.microsoft.com/de-ch/store/b/sale',
    text: 'Sonderangebote',
  },
  {
    href: 'https://www.microsoft.com/de-ch/store/b/business',
    text: 'Kleine Unternehmen',
  },
  { href: 'https://support.microsoft.com/de-ch', text: 'Support' },
];

const additionalNavItems = [
  {
    onclick: 'showDropdown',
    title: 'Alles von Microsoft',
    icon: 'keyboard_arrow_down',
  },
  {
    onclick: 'openSearch',
    title: 'Suchen',
    icon: 'search',
  },
  {
    onclick: 'https://www.microsoft.com/de-ch/store/cart',
    title: 'Warenkorb',
    icon: 'shopping_cart',
  },
  {
    onclick:
      'https://login.live.com/oauth20_authorize.srf?client_id=10fa57ef-4895-4ab2-872c-8c3613d4f7fb&scope=openid+profile+offline_access&redirect_uri=https%3a%2f%2fwww.microsoft.com%2fcascadeauth%2faccount%2fsignin-oidc&response_type=code&state=CfDJ8GIDTS11_mxJlLbEvLbfH9PqSJB-lobrrFGMsDiGTYM46uR1Vt4KtfQsA8JVwqgVifK-aUFcRsJPSGDkN4BMZRSaxeO1BfMFT_Bw20ChhKlItEysoD6_vZeWJFf7xsBMms46Vd2UY5uhMByHVJxoqLticM7ZS3m-eKztkEWObUY_oCwgm4mh5JddLT6badthh6c1dRFDxUUcOSNA1djLoW5-UvIwG_kAXNu410QPpme1KTh2MLRISrt2m9RJJx9y8O4W6c13nrMyrCWeTrR6rvi6GEqCaOZeI7DwZdA4eaW3-Wg4qbhV3ZIqm2phDnP09G4TDiBD_regD6Hs4WruYplhHJoir3T8cZqb2R60JDIXwfDwFs8hPUA3-m-kQjnHj2IHKKH2l2cPu32SeMzVlsSJHYifyk8exEjkU0tyd8FD37-lyn1DAqnnvI4rBwxDZe1navkzw5IBeqFmXBWgwvZziBRwfw00FaVXYMC6Asnk&response_mode=form_post&nonce=638603749286537808.NmU4ZTllZjMtZjY5Zi00YWUwLThhMDgtZDRmM2ZjNjJjMjIzOWE5ZTRkNmItMmMyNS00YTk0LWI2MTQtZWYzNTcyZGI1NTNi&code_challenge=_W_hX0PnvUlY2hUTyWrloNMznJKy9MUJbnRrE8j0mv8&code_challenge_method=S256&x-client-SKU=ID_NET6_0&x-client-Ver=7.6.0.0&uaid=5ec7ee59eae44099b577760dca924287&msproxy=1&issuer=mso&tenant=consumers&ui_locales=de-CH&client_info=1&epct=PAQABDgEAAAApTwJmzXqdR4BN2miheQMYDnNN4lYARtfnVYnf5-bqVdOI15HwCFGLR35h3WoppqsNW0gxzyGNIYfBqTfnh1NHhG4cx_jEn_iqoOsfP3fKbogwfHLhFkikyN5kslweuY7LTlTOB-whoEVvT4M-Kg0t7JwXvlluRsfNFco0xiJUbUipAd3HNMUAeqRQYg2q-Vkdq1gSwfUeqrZ3iMdQTVUdPTmQzGokvAzOJHj1d-cwJSAA&jshs=0&claims=%7b%22compact%22%3a%7b%22name%22%3a%7b%22essential%22%3atrue%7d%7d%7d#',
    title: 'Anmelden',
    icon: 'account_circle',
  },
];

const header = document.querySelector('header');
const nav = document.querySelector('nav');

const createLogo = () => {
  const logo = createElement('img', {
    src: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    alt: 'Microsoft Logo',
  });
  return createElement('a', {
    href: 'https://www.microsoft.com/de-ch',
    children: [logo],
  });
};

const createNavItems = () => {
  const ul = createElement('ul');
  navItems.forEach((item) => {
    const a = createElement('a', {
      href: item.href,
      textContent: item.text,
    });
    const li = createElement('li', { children: [a] });
    ul.appendChild(li);
  });
  return ul;
};

const logoLink = createLogo();
const navItemsList = createNavItems();

const addAdditionalItems = () => {
  const div = document.createElement('div');

  additionalNavItems.map((item) => {
    const button = document.createElement('button');
    const icon = document.createElement('i');

    icon.className = 'material-icons';
    icon.textContent = item.icon;

    button.textContent = item.title;
    button.onclick = item.onclick;
    button.appendChild(icon);
    div.className = 'additional-nav-items-container';
    div.appendChild(button);
  });

  header.appendChild(div);
};

const showDropdown = () => {
  const dropdown = document.querySelector('.container-dropdown');
  const button = document.querySelector('button');

  button.onclick = () => {
    dropdown.setAttribute('data-visible', 'true');
  };
};

addAdditionalItems();

/*
 * function to initialize dropdown in header
 *
 * */

const addDropdownToHeader = (data) => {
  const header = document.querySelector('header');
  const dropdownContainer = createElement('ul', {
    className: 'container-dropdown',
  });
  const elements = createElementsFromObjects(data);
  elements.forEach((el) => dropdownContainer.appendChild(el));
  header.appendChild(dropdownContainer);
};

addDropdownToHeader(navDropdownData);