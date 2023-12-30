import { useState, useCallback } from 'react';
import styles from './index.module.scss';

export default function Accordion({
  prefixComponent,
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
  prefixComponent?: () => React.ReactNode;
}) {
  const [status, setStatus] = useState<'opened' | 'closed'>('closed');
  const [animation, setAnimation] = useState({
    display: 'none',
    opacity: 0,
  });

  const toggle = useCallback(() => {
    const newAnimation = { ...animation };
    if (status === 'closed') {
      setStatus('opened');
      newAnimation.display = 'block';
      setAnimation(newAnimation);
      setTimeout(() => setAnimation({ ...newAnimation, opacity: 1 }), 100);
    } else if (status === 'opened') {
      setStatus('closed');
      newAnimation.opacity = 0;
      setAnimation(newAnimation);
      setTimeout(() => setAnimation({ ...newAnimation, display: 'none' }), 100);
    }
  }, [animation, status]);

  return (
    <>
      <details id="accordion" className={styles.details}></details>
      <label htmlFor="accordion" className={`${styles.accordion} ${styles[status]}`}>
        {prefixComponent && <div className={styles.prefix}>{prefixComponent()}</div>}
        <div className={styles.content}>
          <p className={styles.label}>{label}</p>
          <p className={styles.hiddenContent} style={{ display: animation.display, opacity: animation.opacity }}>
            {children}
          </p>
        </div>
        <button className={styles.btn} onClick={toggle}>
          <span className={`${styles.line} ${styles.one}`}></span>
          <span className={`${styles.line} ${styles.two}`}></span>
        </button>
      </label>
    </>
  );
}
