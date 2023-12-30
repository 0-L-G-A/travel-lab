import { useMemo } from 'react';
import StarIcon from 'assets/icons/StarIcon';

import { ICustomerReview } from '../index.types';

import styles from './index.module.scss';

export default function CustomerReview({ company, customer, rate, review }: ICustomerReview) {
  const rateArr = useMemo(() => Array(5).fill('#FCC229', 0, rate).fill('#f8f9fa', rate), [rate]);

  return (
    <div className={styles.customerReview}>
      <p className={styles.review}>{review}</p>
      <div className={styles.bottom}>
        <div className={styles.details}>
          <p className={styles.name}>{`${customer.name} (${customer.occupation})`}</p>
          <p className={styles.company}>{`${company.country}/${company.workersAmount} people/${company.name}`}</p>
        </div>
        <div className={styles.rateContainer}>
          {rateArr.map((col, idx) => (
            <StarIcon key={idx} color={col} />
          ))}
        </div>
      </div>
    </div>
  );
}
