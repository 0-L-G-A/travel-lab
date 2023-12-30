import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { langs } from './index.config';
import { ILangDropdown } from './index.types';

import arrowIcon from 'assets/icons/arrowIcon.svg';

import styles from './index.module.scss';

const CustomDropDown = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<ILangDropdown>(langs[0]);
  const [status, setStatus] = useState<'opened' | 'closed'>('closed');

  const handleDropDownFocus = useCallback(() => {
    switch (status) {
      case 'opened':
        setStatus('closed');
        break;
      case 'closed':
        setStatus('opened');
        break;
    }
  }, [status]);

  const handleSetLanguage = (langOptions: ILangDropdown) => {
    setLanguage(langOptions);
    setStatus('closed');
  };

  useEffect(() => {
    i18n.changeLanguage(language.code);
  }, [language.code]);

  return (
    <label
      htmlFor="select-original"
      className={`${styles.dropDown} ${styles[status]}`}
      onClick={handleDropDownFocus}
    >
      <p className={styles.text}>{language?.code.toUpperCase()}</p>
      <img className={styles.marker} src={arrowIcon} alt="" />
      <ul className={styles.list}>
        {langs.map((item: ILangDropdown) => (
          <li className={styles.listItem} key={item.code} onClick={() => handleSetLanguage(item)}>
            <div className={styles.itemInfo}>
              <img src={item.icons} alt={item.code} />
              {item.lang}
            </div>
            <div className={styles.divider}></div>
          </li>
        ))}
      </ul>
      <select
        disabled
        id="select-original"
        value={language.code}
        className={styles.select}
        name="select"
      ></select>
    </label>
  );
};

export default CustomDropDown;
