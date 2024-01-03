import LandingBlockTitle from '../LandingBlockTitle';
import { TitleCodes } from '../LandingBlockTitle/index.config';
import PriceColumn from './PriceColumn';
import { PriceColumnType } from './PriceColumn/index.types';
import PriceWrapper from './PriceWrapper';
import styles from './index.module.scss';

const columns = ['ESSENTIALS', 'STANDARD', 'PRO'];

export default function PriceBlock() {
  return (
    <section className={styles.priceBlock}>
      <LandingBlockTitle theme="dark" titleCode={TitleCodes.PRICE} noDescription />
      <PriceWrapper>
        {columns.map((column, idx) => (
          <PriceColumn
            tag={idx === 1 ? 'MOST POPULAR' : undefined}
            key={column}
            priceType={column as PriceColumnType}
          />
        ))}
      </PriceWrapper>
    </section>
  );
}
