// src/i18n/utils.ts
// Utilities for multi-language support.
// Currently supports 'en' and 'fa'. Add more locale files as needed.

import { en } from './en';
import { fa } from './fa';

export const LOCALES = ['en', 'fa'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const translations: Record<Locale, typeof en> = { en, fa };

/** Return the translation object for a given locale. */
export function useTranslations(locale: Locale) {
  return translations[locale] ?? translations[DEFAULT_LOCALE];
}

/**
 * Derive the locale from an Astro URL pathname.
 * e.g. /fa/about → 'fa', /about → 'en'
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const [, maybeLocale] = pathname.split('/');
  if (LOCALES.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Whether a locale is RTL (right-to-left). */
export function isRTL(locale: Locale): boolean {
  return locale === 'fa';
}
