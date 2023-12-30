import { Route } from 'react-router-dom';

import { ROUTES } from './index';

import { ToursList, NewTour } from 'scenes/TourManagement';
import { DashboardNavBarWrapper, DashboardHeaderWrapper } from 'scenes';
export default [
  <Route element={<DashboardNavBarWrapper />} key="main admin dashboard with nav">
    <Route path={ROUTES.tourManagement} Component={ToursList} />
  </Route>,
  <Route element={<DashboardHeaderWrapper />} key="main admin dashboard without nav">
    <Route path={ROUTES.newTour} Component={NewTour} />
  </Route>
];
