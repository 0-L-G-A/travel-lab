import { useTranslation } from 'react-i18next';
import { TitleCodes } from './index.config';

import styles from './index.module.scss';

export default function LandingBlockTitle({
  titleCode,
  theme,
  noDescription,
}: {
  titleCode: TitleCodes;
  theme: 'light' | 'dark';
  noDescription?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div className={`${styles.titleContainer} ${styles[theme]}`}>
      <h2 className={styles.title}>{t(`${titleCode}.TITLE`)}</h2>
      {!noDescription && <p className={styles.description}>{t(`${titleCode}.DESCRIPTION`)}</p>}
    </div>
  );
}
