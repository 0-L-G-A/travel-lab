import styles from './index.module.scss';

export default function Tag({ label, className }: { label: string; className?: string }) {
  return <div className={`${styles.tag} ${className}`}>{label}</div>;
}
