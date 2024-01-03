import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROLES, AdminRoutes, GeneralRoutes, MainAdminRoutes } from 'routes';

import NotFound from 'scenes/General/NotFound/NotFound';

import { ProtectedRoutesWrapper } from 'scenes';

const routes = {
  [ROLES.admin]: AdminRoutes,
  [ROLES.mainAdmin]: MainAdminRoutes,
};

const role = ROLES.mainAdmin;

const App = () => {
  return (
    <Router>
      <Routes>
        {GeneralRoutes}
        <Route element={<ProtectedRoutesWrapper loginRequired />}>{routes[role]}</Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
