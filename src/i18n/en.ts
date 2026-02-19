// src/i18n/en.ts
export const en = {
  nav: {
    home: 'Home',
    about: 'About',
    sermons: 'Sermons',
    contact: 'Contact',
  },
  hero: {
    heading: 'Welcome to Worship.ge',
    subheading: 'A community of faith, prayer, and worship.',
    cta: 'Listen to Sermons',
  },
  footer: {
    copyright: '© {year} Worship.ge — All rights reserved.',
  },
  contact: {
    heading: 'Contact Us',
    subheading: "We'd love to hear from you. Reach out any time.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send Message',
  },
} as const;

export type Translations = typeof en;
