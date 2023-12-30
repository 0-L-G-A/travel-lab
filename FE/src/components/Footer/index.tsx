import styles from './index.module.scss';
import facebookIcon from 'assets/images/facebookIcon.png';
import twitterIcon from 'assets/images/twitterIcon.png';
import instagramIcon from 'assets/images/instagramIcon.png';
import linkedinIcon from 'assets/images/linkedinIcon.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <div className={styles.footerInfoBlockIcons}>
            <img className={styles.footerInfoIcon} src={facebookIcon} alt="Facebook Icon" />
            <img className={styles.footerInfoIcon} src={instagramIcon} alt="Instagram Icon" />
            <img className={styles.footerInfoIcon} src={twitterIcon} alt="Twitter Icon" />
            <img className={styles.footerInfoIcon} src={linkedinIcon} alt="Linkedin Icon" />
          </div>
        </div>
      </footer>
      <div >
        <p className={styles.copyrightInfo}>{t('FOOTER.COPYRIGHT')}</p>
      </div>
    </>
  );
};

export default Footer;
