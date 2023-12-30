import { useTranslation } from 'react-i18next';
import Tag from 'components/Tag';

import { priceTitleCodes } from './index.config';

import { PriceColumnType } from './index.types';

import styles from './index.module.scss';

export default function PriceColumn({ priceType, tag }: { priceType: PriceColumnType; tag?: string }) {
  const { t } = useTranslation();

  return (
    <div className={styles.priceColumn}>
      {tag && <Tag className={styles.tag} label={tag} />}
      <h3 className={styles.title}>{t(priceTitleCodes[priceType].title)}</h3>
      <p className={styles.description}>{t(priceTitleCodes[priceType].description)}</p>
      <ul className={styles.benefits}>
        {priceTitleCodes.BENEFITS.map((benefit) => (
          <li className={styles.benefit} key={benefit.id}>
            {t(benefit.text)}
          </li>
        ))}
      </ul>
    </div>
  );
}
