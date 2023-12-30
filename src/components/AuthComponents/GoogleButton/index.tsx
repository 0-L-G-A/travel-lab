import googleIcon from 'assets/icons/googleIcon.svg';

import styles from './index.module.scss';

export default function GoogleButton({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const handleGoogleAuth = () => {}

  return (
    <button onClick={handleGoogleAuth} className={`${styles.googleButton} ${className}`} type="button">
      <img className={styles.googleIcon} src={googleIcon} alt="google icon" />
      {children}
    </button>
  );
}
