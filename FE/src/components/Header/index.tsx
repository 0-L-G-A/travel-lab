import * as React from 'react';
import styles from './index.module.scss';
import CustomDropDown from 'components/Dropdown';
import TravelLogo from 'assets/images/logo.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

interface HeaderProps {
  authorized: boolean;
}

const Header: React.FC<HeaderProps> = ({ authorized }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationLeft}>
          <div className={styles.titleLogoDiv}>
            <img src={TravelLogo} alt="travel+logo" width="100" height="50" />
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>{t('NAVIGATION.TRIPS')}</li>
              <li className={styles.navListItem}>{t('NAVIGATION.PRICES')}</li>
              <li className={styles.navListItem}>{t('NAVIGATION.ABOUT_US')}</li>
              <li className={styles.navListItem}>{t('NAVIGATION.CONTACT')}</li>
              {authorized ? (
                <li className={styles.navListItem}>{t('NAVIGATION.MY_PROTOCOLS')}</li>
              ) : null}
            </ul>
          </nav>
        </div>
        <div className={styles.navigationRight}>
          <CustomDropDown />
          {authorized ? null : (
            <button className={styles.protocolButton}>{t('NAVIGATION.VIEW_PROTOCOL')}</button>
          )}
          <button onClick={() => navigate('/sign-in')} className={styles.getStartedButton}>
            {t('NAVIGATION.GET_STARTED')}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
