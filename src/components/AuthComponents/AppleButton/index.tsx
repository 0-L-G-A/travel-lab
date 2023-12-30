import appleIcon from 'assets/icons/appleIcon.svg';

import styles from './index.module.scss';

export default function AppleButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleAppleAuth = () => {};

  return (
    <button
      onClick={handleAppleAuth}
      className={`${styles.appleButton} ${className}`}
      type="button"
    >
      <img className={styles.appleIcon} src={appleIcon} alt="apple icon" />
      {children}
    </button>
  );
}
