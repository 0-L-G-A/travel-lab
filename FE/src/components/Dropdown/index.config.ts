import { ILangDropdown } from './index.types';
import germanFlag from 'assets/icons/germanFlag.svg';
import usaFlag from 'assets/icons/usaFlag.svg';

export const langs: ILangDropdown[] = [
  {
    code: 'en',
    lang: 'English',
    icons: usaFlag,
  },
  {
    code: 'de',
    lang: 'German',
    icons: germanFlag,
  },
];
