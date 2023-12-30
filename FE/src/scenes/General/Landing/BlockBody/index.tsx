import ContentCard from '../ContentCard';
import styles from './index.module.scss';
import { BlockBodyModeType } from './index.types';

export default function BlockBody({
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
    <div className={`${styles.blockBody} ${styles[mode]}`}>
      <div className={styles.radialGradient}></div>
      <ContentCard tag={tag} mode={mode} title={title} picture={picture} description={description} />
    </div>
  );
}
