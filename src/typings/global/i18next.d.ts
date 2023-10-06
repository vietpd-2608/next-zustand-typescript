// gkc_hash_code : 01GYEA5P94ZESFA5FHPKT5GFMJ

import 'i18next';

import type common from '@public/locales/ja/common.json';

interface I18nNamespaces {
  common: typeof common;
}

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
