import { getPermalink } from './utils/permalinks';

export const headerDataPt = {
  links: [
    {
      text: 'Sobre Nós',
      href: getPermalink('/pt/about'),
    },
    /*   {
      text: 'A Nossa Equipa',
      href: getPermalink('/en/teachers'),
    },
    {
      text: 'Aulas',
      href: getPermalink('/en/classes'),
    }, */
    {
      text: 'Horário',
      href: getPermalink('/pt/schedule'),
    },
    {
      text: 'Preços',
      href: getPermalink('/pt/pricing'),
    },
    {
      text: 'Contactos',
      href: getPermalink('/pt/contact'),
    },
  ],
};

export const footerDataPt = {
  links: [],
  secondaryLinks: [
    { text: 'As nossas reglas', href: getPermalink('/pt/rules') },
    { text: 'Politica de privacidade', href: getPermalink('/pt/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/opendancemadeira' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/opendancemadeira' },
  ],
  footNote: `
    OpenDance © · All rights reserved.
  `,
};

export const headerDataEn = {
  links: [
    {
      text: 'About Us',
      href: getPermalink('/en/about'),
    },
    /*   {
      text: 'Our Team',
      href: getPermalink('/en/teachers'),
    },
    {
      text: 'Classes',
      href: getPermalink('/en/classes'),
    }, */
    {
      text: 'Schedule',
      href: getPermalink('/en/schedule'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/en/pricing'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/en/contact'),
    },
  ],
};

export const footerDataEn = {
  links: [],
  secondaryLinks: [
    { text: 'Our rules', href: getPermalink('/en/rules') },
    { text: 'Privacy Policy', href: getPermalink('/en/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Whatsapp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/opendancemadeira' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/opendancemadeira' },
  ],
  footNote: `
    OpenDance © · All rights reserved.
  `,
};
