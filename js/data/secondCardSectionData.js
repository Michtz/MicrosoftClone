/*
 *  Card Section s
 * Michael Venetz 2024
 * */

const cardsOneData = [
  {
    tagName: 'div',
    className: 'card-container',
    children: [
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'div',
            className: 'image-container',
            children: [
              {
                tagName: 'img',
                src: 'assets/cardImg3.png',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'span',
                textContent: 'Neu',
                dataset: { color: 'yellow' },
              },
              {
                tagName: 'h2',
                textContent: 'Surface Laptop, Copilot+ PC',
              },
              {
                tagName: 'p',
                textContent:
                  'Nutzen Sie mit diesem aussergewöhnlich leistungsstarken Notebook KI-Funktionen wie Live Captions und Cocreator.',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'button-container',
            children: [
              {
                tagName: 'button',
                textContent: 'Jetzt Kaufen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'div',
            className: 'image-container',
            children: [
              {
                tagName: 'img',
                src: 'assets/cardImg1.png',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'span',
                textContent: 'Nur im Microsoft Store',
                dataset: { color: 'yellow' },
              },
              {
                tagName: 'h2',
                textContent: 'Xbox Series X – 2 TB',
              },
              {
                tagName: 'p',
                textContent:
                  'Die leistungsfähigste Xbox aller Zeiten mit der höchsten Bildfrequenz und blitzschnellen Ladezeiten ist bald mit einer 2 TB SSD in der Sonderedition Galaxy Black erhältlich.',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'button-container',
            children: [
              {
                tagName: 'button',
                textContent: 'Jetzt vorbestellen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'div',
            className: 'image-container',
            children: [
              {
                tagName: 'img',
                src: 'assets/cardImg2.png',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'span',
                textContent: 'Neu',
                dataset: { color: 'yellow' },
              },
              {
                tagName: 'h2',
                textContent: 'Xbox Series S – 1 TB in Robot White',
              },
              {
                tagName: 'p',
                textContent:
                  'Bestelle jetzt die Xbox Series S mit 1 TB Speicherplatz in der eleganten Farbe Robot White mit 1 TB Speicherplatz zum besten Preis.',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'button-container',
            children: [
              {
                tagName: 'button',
                textContent: 'Jetzt vorbestellen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'div',
            className: 'image-container',
            children: [
              {
                tagName: 'img',
                src: 'assets/cardImg4.png',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'h2',
                textContent: 'Xbox Controller',
              },
              {
                tagName: 'p',
                textContent:
                  'Elite, kabellos und anpassungsfähig – finde den Controller für deinen Stil.',
              },
            ],
          },
          {
            tagName: 'div',
            className: 'button-container',
            children: [
              {
                tagName: 'button',
                textContent: 'Jetzt Kaufen',
              },
            ],
          },
        ],
      },
    ],
  },
];

const cardsTwoData = [
  {
    tagName: 'div',
    className: 'card-container',
    children: [
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'img',
            src: 'assets/cardImg5.png',
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'span',
                textContent: 'Neu',
                dataset: { color: 'yellow' },
              },
              {
                tagName: 'h2',
                textContent: 'Copilot+ PCs for Business',
              },
              {
                tagName: 'p',
                textContent:
                  'Surface Pro for Business und Surface Laptop for Business schalten neue KI-beschleunigte Funktionen wie Windows-Studioeffekte frei.',
              },
              {
                tagName: 'button',
                textContent: 'Surface Pro for Business vorbestellen',
              },
              {
                tagName: 'a',
                href: '#',
                textContent: 'Alle Surface for Business-Produkte anzeigen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'img',
            src: 'assets/cardImg6.png',
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'h2',
                textContent: 'Microsoft Teams für Ihr Unternehmen',
              },
              {
                tagName: 'p',
                textContent:
                  'Onlinebesprechungen, Chat, Zusammenarbeit in Echtzeit und gemeinsam genutzter Cloud-Speicher – alles an einem Ort.',
              },
              {
                tagName: 'button',
                textContent: 'Jetzt vorbestellen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'img',
            src: 'assets/cardImg7.png',
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'h2',
                textContent: 'Copilot für Microsoft 365',
              },
              {
                tagName: 'p',
                textContent:
                  'Sparen Sie Zeit und konzentrieren Sie sich auf die Dinge, die am wichtigsten sind – mit KI in Microsoft 365 for Business.',
              },
              {
                tagName: 'button',
                textContent: 'Weitere Informationen',
              },
            ],
          },
        ],
      },
      {
        tagName: 'div',
        className: 'card',
        children: [
          {
            tagName: 'img',
            src: 'assets/cardImg8.png',
          },
          {
            tagName: 'div',
            className: 'content-container',
            children: [
              {
                tagName: 'h2',
                textContent: 'Visual Studio 2022',
              },
              {
                tagName: 'p',
                textContent:
                  'Profitieren Sie von der leistungsfähigsten IDE für .NET- und C++-Entwickler unter Windows, um Web-, Cloud-, Desktop- und mobile Anwendungen, Dienste und Spiele zu erstellen.',
              },
              {
                tagName: 'button',
                textContent: 'Visual Studio 2022 herunterladen',
              },
            ],
          },
        ],
      },
    ],
  },
];