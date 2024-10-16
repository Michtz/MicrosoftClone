const sliderContentData = [
  {
    tagName: 'div',
    className: 'slider-container',
    id: 'slider-container',
    children: [
      {
        tagName: 'section',
        className: 'defaultSlide',
        children: [
          {
            tagName: 'picture',
            children: [
              {
                tagName: 'source',
                media: '(max-width: 1080px)',
                srcset: 'assets/mobile/sliderImg1Mobile.png',
                type: 'image/webp',
              },
              {
                tagName: 'img',
                src: 'assets/microsoftSale.png',
              },
            ],
          },

          {
            tagName: 'div',
            className: 'text-container-a',
            children: [
              {
                tagName: 'h1',
                textContent: 'Back to School',
              },
              {
                tagName: 'p',
                textContent:
                  'Ausgewählte Produkte von Surface und Xbox sind für kurze Zeit im Angebot. Solange der Vorrat reicht.',
              },
              {
                tagName: 'button',
                children: [
                  {
                    tagName: 'a',
                    href: 'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25',
                    textContent: 'Jetzt Kaufen',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        tagName: 'section',
        className: 'slide',
        children: [
          {
            tagName: 'picture',
            children: [
              {
                tagName: 'source',
                media: '(max-width: 1080px)',
                srcset: 'assets/mobile/sliderImg2Mobile.png',
                type: 'image/webp',
              },
              {
                tagName: 'img',
                src: 'assets/surfacePro.png',
              },
            ],
          },

          {
            tagName: 'div',
            className: 'text-container-b',
            children: [
              {
                tagName: 'h1',
                textContent: 'Surface Pro Copilot+PC',
              },
              {
                tagName: 'p',
                textContent:
                  'Das Surface Pro Copilot+PC bietet Flexibilität und außergewöhnliche KI-Funktionen für maximale Produktivität.',
              },
              {
                tagName: 'button',
                children: [
                  {
                    tagName: 'a',
                    href: 'https://www.microsoft.com/de-ch/store/b/sale?icid=mscom_marcom_H1a_BTS25',
                    textContent: 'Jetzt Kaufen',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    tagName: 'div',
    className: 'controls',
    id: 'controls',
    children: [
      {
        tagName: 'button',
        textContent: 'pause_circle',
        className: 'material-icons',
        id: 'toggle',
      },
      {
        tagName: 'button',
        textContent: 'arrow_back_ios',
        className: 'material-icons',
        id: 'prev',
      },
      {
        tagName: 'button',
        textContent: 'radio_button_checked',
        className: 'material-icons',
        id: 'first',
      },
      {
        tagName: 'button',
        textContent: 'radio_button_unchecked',
        className: 'material-icons',
        id: 'second',
      },
      {
        tagName: 'button',
        textContent: 'arrow_forward_ios',
        className: 'material-icons',
        id: 'next',
      },
    ],
  },
];