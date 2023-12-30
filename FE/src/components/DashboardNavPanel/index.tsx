import Logo from './Logo';
import Divider from './Divider';

import styles from './index.module.scss'

const DashboardNavPanel = ({ config = {} }) => {
  return (
    <div className={styles.navPanel}>
      <Logo />
      <Divider />

      <Divider />

    </div>
  );
};

export default DashboardNavPanel;