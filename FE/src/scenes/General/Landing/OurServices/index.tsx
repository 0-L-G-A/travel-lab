import styles from './index.module.scss';
import activityIcon from 'assets/images/ActivityIcon.png';
import calendarIcon from 'assets/images/CalendarIcon.png';
import categoryIcon from 'assets/images/CategoryIcon.png';
import editIcon from 'assets/images/EditIcon.png';
import sendIcon from 'assets/images/SendIcon.png';
import swapIcon from 'assets/images/SwapIcon.png';
import { useTranslation } from 'react-i18next';

const OurServicesBlock = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.services}>
        <h2 className={styles.servicesTitle}>{t('OUR_SERVICES.TITLE')}</h2>
        <div className={styles.ourServices}>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img
                className={styles.ourServicesBlockImage}
                src={activityIcon}
                alt="Activity Icon"
              />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>
              {t('OUR_SERVICES.ACTIVITY_BLOCK.TITLE')}
            </h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.ACTIVITY_BLOCK.DESCRIPTION')}
            </p>
          </div>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img className={styles.ourServicesBlockImage} src={swapIcon} alt="Swap Icon" />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>{t('OUR_SERVICES.SWAP_BLOCK.TITLE')}</h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.SWAP_BLOCK.DESCRIPTION')}
            </p>
          </div>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img className={styles.ourServicesBlockImage} src={sendIcon} alt="Send Icon" />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>{t('OUR_SERVICES.SEND_BLOCK.TITLE')}</h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.SEND_BLOCK.DESCRIPTION')}
            </p>
          </div>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img
                className={styles.ourServicesBlockImage}
                src={categoryIcon}
                alt="Category Icon"
              />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>
              {t('OUR_SERVICES.CATEGORY_BLOCK.TITLE')}
            </h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.CATEGORY_BLOCK.DESCRIPTION')}
            </p>
          </div>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img className={styles.ourServicesBlockImage} src={editIcon} alt="Edit Icon" />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>{t('OUR_SERVICES.EDIT_BLOCK.TITLE')}</h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.EDIT_BLOCK.DESCRIPTION')}
            </p>
          </div>
          <div className={styles.ourServicesBlock}>
            <div className={styles.ourServicesBlockBackgroundImg}>
              <img
                className={styles.ourServicesBlockImage}
                src={calendarIcon}
                alt="Calendar Icon"
              />
            </div>
            <h4 className={styles.ourServicesBlockTitle}>
              {t('OUR_SERVICES.CALENDAR_BLOCK.TITLE')}
            </h4>
            <p className={styles.ourServicesBlockDescription}>
              {t('OUR_SERVICES.CALENDAR_BLOCK.DESCRIPTION')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServicesBlock;
