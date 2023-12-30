import Tag from 'components/Tag';
import styles from './index.module.scss';
import { BlockBodyModeType } from '../BlockBody/index.types';

export default function ContentCard({
  tag,
  mode,
  picture,
  title,
  description,
}: {
  mode: BlockBodyModeType;
  picture: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className={`${styles.contentCard} ${styles[mode]}`}>
      <div className={styles.cardLeft}>
        <div className={styles.tag}>
          <Tag label={tag} />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.cardRight}>
        <img className={styles.image} src={picture} alt="" />
      </div>
    </div>
  );
}
