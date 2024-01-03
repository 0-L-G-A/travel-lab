import { useTranslation } from 'react-i18next';

import BigLogo from 'assets/images/bigLogo.jpg';
import deliveryMapScreen from 'assets/images/Screen.png';
import Vector30 from 'assets/icons/vector30/vector-svg30';
import CheckMark from 'assets/icons/checkmark-icon/checkmark';

import styles from './index.module.scss';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.bannerRoot}>
      <div className={styles.bannerBackground}></div>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerContentLeft}>
            <div className={styles.bannerContentRightVector30Svg}>
              <Vector30 />
            </div>
            <h1 className={styles.bannerContentLeftTitle}>{t('HOME_PAGE.TITLE')}</h1>
            <p className={styles.bannerContentLeftDescription}>{t('HOME_PAGE.DESCRIPTION')}</p>
            <div className={styles.bannerContentLeftFreeTrial}>
              <input
                placeholder={t('HOME_PAGE.INPUT_PLACEHOLDER')}
                className={styles.bannerContentLeftFreeTrialInput}
              ></input>
              <button className={styles.bannerContentLeftFreeTrialButton}>
                {t('HOME_PAGE.CONTACT_ME')}
              </button>
            </div>
            <div className={styles.bannerContentLeftLowerText}>
              <div className={styles.bannerContentLeftLowerTextIcon}>
                <CheckMark />
              </div>
              <p className={styles.bannerContentLeftLowerTextDescription}>
                {t('HOME_PAGE.CLIENTS_JOINED')}
              </p>
            </div>
          </div>
          <div className={styles.bannerContentRight}>
            <div className={styles.bannerContentRightDeliveryDiv}>
              <img
                className={styles.bannerContentRightDeliveryMapImage}
                alt="delivery map"
                src={deliveryMapScreen}
              />
            </div>
            <div className={styles.bannerContentRightBrowserDiv}>
              <img src={BigLogo} alt="browser" className={styles.bannerContentRightBrowserImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
