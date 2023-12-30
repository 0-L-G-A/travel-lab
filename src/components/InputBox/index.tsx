import { useEffect, useMemo } from 'react';

import { addClassToChildrenById, removeClassFromChildrenById } from 'utils/helpers';

import { IInputBox, StatusType } from './index.types';

import styles from './index.module.scss';

export default function InputBox({ children, label, className, errorMessage, id }: IInputBox) {
  const status: StatusType = useMemo(() => (errorMessage ? 'error' : 'default'), [errorMessage]);

  useEffect(() => {
    if (status === 'error') {
      addClassToChildrenById(id, styles.errorInput);
      removeClassFromChildrenById(id, styles.defaultInput);
    } else if (status === 'default') {
      addClassToChildrenById(id, styles.defaultInput);
      removeClassFromChildrenById(id, styles.errorInput);
    }
  }, [status]);

  return (
    <div id={id} className={`${styles.inputBox} ${styles[status]} ${className}`}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
      <p className={styles.errorMessage}>{errorMessage ?? 'error'}</p>
    </div>
  );
}
