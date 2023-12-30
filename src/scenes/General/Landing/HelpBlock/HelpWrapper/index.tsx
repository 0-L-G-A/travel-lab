import styles from './index.module.scss';

export default function HelpWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`${styles.helpWrapper} ${className}`}>{children}</div>;
}
