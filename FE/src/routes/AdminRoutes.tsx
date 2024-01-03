import { Route } from 'react-router-dom';

import { DashboardNavBarWrapper } from 'scenes';

import { ROUTES } from './index';

import { ToursList } from 'scenes/TourManagement';

export default [
  <Route element={<DashboardNavBarWrapper />} key="admin dashboard with nav">
    <Route path={ROUTES.tourManagement} Component={ToursList} />
    <Route path={ROUTES.notAssignedTours} Component={ToursList} />
    <Route path={ROUTES.cancelledTours} Component={ToursList} />
  </Route>,
];
