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

const addNavigationItems = () => {
  const nav = document.querySelector('nav');
  const ul = document.createElement('ul');

  const navigationItems = navItems.map((item) => {
    const a = document.createElement('a');
    const li = document.createElement('li');

    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    return li;
  });

  // Hier fügen wir jedes Element zur ul hinzu
  navigationItems.forEach((item) => ul.appendChild(item));

  nav.appendChild(ul);
};

const addAllFromMicrosoftDropdown = () => {
  const header = document.querySelector('header');
  const container = document.createElement('div');

  const outerUl = document.createElement('ul');

  const rows = navItemsDropdownContent.map((item, index) => {
    const container = document.createElement('li');
    const ul = document.createElement('ul');
    const span = document.createElement('span');
    span.textContent = item.text;

    const items = navItemsDropdownContent[index].content.map((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = item.href;
      a.textContent = item.text;
      li.appendChild(a);
      return li;
    });

    items.forEach((item) => ul.appendChild(item));
    container.appendChild(span);
    container.appendChild(ul);
    container.className = 'section';
    return container;
  });

  rows.forEach((item) => outerUl.appendChild(item));
  outerUl.className = 'container-dropdown';
  header.appendChild(outerUl);
};

addAllFromMicrosoftDropdown();
addLogo();
addNavigationItems();