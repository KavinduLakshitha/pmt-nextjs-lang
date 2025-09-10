import path from 'path';
import { UserConfig } from 'next-i18next';

const config: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'fr', 'it'],
  },
  localePath: path.resolve('./locales'),
};

export default config;
