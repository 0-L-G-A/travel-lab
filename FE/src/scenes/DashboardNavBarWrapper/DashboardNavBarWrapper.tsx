import { Outlet } from 'react-router-dom';

import { NAV_PANEL_CONFIG} from 'routes/constants';

import NavPanel from 'components/DashboardNavPanel';

import styles from './index.module.scss';

const DashboardNavBarWrapper = ({ role = '' }) => {
  return (
    <div className={styles.navBarWrapper}>
      <NavPanel config={NAV_PANEL_CONFIG[role]} />
      <Outlet />
    </div>
  );
}

export default DashboardNavBarWrapper;