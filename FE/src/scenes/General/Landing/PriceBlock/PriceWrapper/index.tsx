import styles from './index.module.scss';

export default function PriceWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.priceWrapper}>{children}</div>;
}
