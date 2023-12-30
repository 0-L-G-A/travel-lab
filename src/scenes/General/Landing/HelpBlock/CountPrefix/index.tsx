import { useMemo } from 'react';

import { addZeroPrefixToNumber } from 'utils/helpers';

import styles from './index.module.scss';

export default function CountPrefix({ num }: { num: number }) {
  const value = useMemo(() => addZeroPrefixToNumber(num), [num]);

  return <p className={styles.counterPrefix}>{value}</p>;
}
