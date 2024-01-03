import LandingBlockTitle from '../LandingBlockTitle';
import CustomerReview from './CustomerReview';

import { reviews } from './index.config';
import { TitleCodes } from '../LandingBlockTitle/index.config';

import styles from './index.module.scss';

export default function CustomerReviewsBlock() {
  return (
    <section className={styles.customerReviewsBlock}>
      <LandingBlockTitle theme="light" titleCode={TitleCodes.CUSTOMER_REVIEWS} />
      <div className={styles.customerReviews}>
        {reviews.map((item, idx) => (
          <CustomerReview key={idx} {...item} />
        ))}
        <div className={styles.fader}>
          <button className={styles.btn}>View More</button>
        </div>
      </div>
    </section>
  );
}
