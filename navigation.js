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
    onclick: 'showDropdown(0)',
    title: 'Alles von Microsoft',
    icon: 'arrowDown',
  },
  {
    onclick: 'openSearch',
    title: 'Suchen',
    icon: 'search',
  },
  {
    onclick: 'https://www.microsoft.com/de-ch/store/cart',
    title: 'Warenkorb',
    icon: 'cart',
  },
  {
    onclick:
      'https://login.live.com/oauth20_authorize.srf?client_id=10fa57ef-4895-4ab2-872c-8c3613d4f7fb&scope=openid+profile+offline_access&redirect_uri=https%3a%2f%2fwww.microsoft.com%2fcascadeauth%2faccount%2fsignin-oidc&response_type=code&state=CfDJ8GIDTS11_mxJlLbEvLbfH9PqSJB-lobrrFGMsDiGTYM46uR1Vt4KtfQsA8JVwqgVifK-aUFcRsJPSGDkN4BMZRSaxeO1BfMFT_Bw20ChhKlItEysoD6_vZeWJFf7xsBMms46Vd2UY5uhMByHVJxoqLticM7ZS3m-eKztkEWObUY_oCwgm4mh5JddLT6badthh6c1dRFDxUUcOSNA1djLoW5-UvIwG_kAXNu410QPpme1KTh2MLRISrt2m9RJJx9y8O4W6c13nrMyrCWeTrR6rvi6GEqCaOZeI7DwZdA4eaW3-Wg4qbhV3ZIqm2phDnP09G4TDiBD_regD6Hs4WruYplhHJoir3T8cZqb2R60JDIXwfDwFs8hPUA3-m-kQjnHj2IHKKH2l2cPu32SeMzVlsSJHYifyk8exEjkU0tyd8FD37-lyn1DAqnnvI4rBwxDZe1navkzw5IBeqFmXBWgwvZziBRwfw00FaVXYMC6Asnk&response_mode=form_post&nonce=638603749286537808.NmU4ZTllZjMtZjY5Zi00YWUwLThhMDgtZDRmM2ZjNjJjMjIzOWE5ZTRkNmItMmMyNS00YTk0LWI2MTQtZWYzNTcyZGI1NTNi&code_challenge=_W_hX0PnvUlY2hUTyWrloNMznJKy9MUJbnRrE8j0mv8&code_challenge_method=S256&x-client-SKU=ID_NET6_0&x-client-Ver=7.6.0.0&uaid=5ec7ee59eae44099b577760dca924287&msproxy=1&issuer=mso&tenant=consumers&ui_locales=de-CH&client_info=1&epct=PAQABDgEAAAApTwJmzXqdR4BN2miheQMYDnNN4lYARtfnVYnf5-bqVdOI15HwCFGLR35h3WoppqsNW0gxzyGNIYfBqTfnh1NHhG4cx_jEn_iqoOsfP3fKbogwfHLhFkikyN5kslweuY7LTlTOB-whoEVvT4M-Kg0t7JwXvlluRsfNFco0xiJUbUipAd3HNMUAeqRQYg2q-Vkdq1gSwfUeqrZ3iMdQTVUdPTmQzGokvAzOJHj1d-cwJSAA&jshs=0&claims=%7b%22compact%22%3a%7b%22name%22%3a%7b%22essential%22%3atrue%7d%7d%7d#',
    title: 'Anmelden',
    icon: 'login',
  },
];

const navItemsDropdownContent = [
  {
    text: 'Software',
    content: [
      { href: '#', text: 'Windows-Apps' },
      { href: '#', text: 'KI' },
      { href: '#', text: 'OneDrive' },
      { href: '#', text: 'Outlook' },
      { href: '#', text: 'Skype' },
      { href: '#', text: 'OneNote' },
      { href: '#', text: 'Microsoft Teams' },
    ],
  },

  {
    text: 'PCs und Geräte',
    content: [
      { href: '#', text: 'Xbox kaufen' },
      { href: '#', text: 'Zubehör' },
    ],
  },
  {
    text: 'Unterhaltung',
    content: [
      { href: '#', text: 'Xbox Game Pass Ultimate' },
      { href: '#', text: 'Xbox-Spiele' },
      { href: '#', text: 'PC-Spiele' },
      { href: '#', text: 'Windows-Spiele' },
      { href: '#', text: 'Filme & TV' },
    ],
  },

  {
    text: 'Unternehmen',
    content: [
      { href: '#', text: 'Microsoft Cloud' },
      { href: '#', text: 'Microsoft Security' },
      { href: '#', text: 'Azure' },
      { href: '#', text: 'Dynamics 365' },
      { href: '#', text: 'Microsoft 365 for Business' },
      { href: '#', text: 'Microsoft Branchen' },
      { href: '#', text: 'Microsoft Power Platform' },
      { href: '#', text: 'Windows 365' },
    ],
  },
  {
    text: 'Entwickler & IT',
    content: [
      { href: '#', text: 'Developer Center' },
      { href: '#', text: 'Dokumentation' },
      { href: '#', text: 'Microsoft Learn' },
      { href: '#', text: 'Microsoft Tech Community' },
      { href: '#', text: 'Azure Marketplace' },
      { href: '#', text: 'AppSource' },
      { href: '#', text: 'Visual Studio' },
    ],
  },

  {
    text: 'Mehr',
    content: [
      { href: '#', text: 'Download Center' },
      { href: '#', text: 'Bildungswesen' },
      { href: '#', text: 'Geschenkkarten' },
      { href: '#', text: 'Lizenzierung' },
    ],
  },
];

const addLogo = () => {
  const header = document.querySelector('header');
  const a = document.createElement('a');
  const logo = document.createElement('img');

  a.href = 'https://www.microsoft.com/de-ch';
  logo.src =
    'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31';
  logo.alt = 'Microsoft Logo';
  a.appendChild(logo);
  header.insertBefore(a, header.firstChild);
};

/*
 * Function to add all navigation items from the navItems array
 */

const addNavigationItems = () => {
  const nav = document.querySelector('nav');
  const ul = document.createElement('ul');

  navItems.forEach((item) => {
    const a = document.createElement('a');
    const li = document.createElement('li');

    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
};

/*
 * Function to add all dropdown elements from the navItemsDropdownContent array
 *
 * */
const addAllFromMicrosoftDropdown = () => {
  const header = document.querySelector('header');
  const outerUl = document.createElement('ul');
  outerUl.className = 'container-dropdown';

  navItemsDropdownContent.forEach((item) => {
    const container = document.createElement('li');
    container.className = 'section';

    const span = document.createElement('span');
    span.textContent = item.text;

    const ul = document.createElement('ul');
    item.content.forEach((subItem) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = subItem.href;
      a.textContent = subItem.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    container.appendChild(span);
    container.appendChild(ul);
    outerUl.appendChild(container);
  });

  header.appendChild(outerUl);
};

addLogo();
addNavigationItems();
addAllFromMicrosoftDropdown();