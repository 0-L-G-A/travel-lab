import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Outlet } from 'react-router-dom';

import { ROLES, ROUTES } from 'routes';

type UserDataType = {
  email: string,
  vin: string,
};

const ProtectedRoutesWrapper = ({ loginRequired = false }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);
  // const authorized = true;    // mocked state of auth for myProtocols page
  const loggedIn = true;    // mocked state of auth for myProtocols page

  const role = ROLES.mainAdmin;

  useLayoutEffect(() => {
    if (loginRequired) {
      if (!loggedIn) {
        navigate(ROUTES.signIn);
      }
      // CHECK FOR LOGIN FOR DASHBOARD ROUTES AFTER AUTH IMPLEMENTATION
    } else {
      const userData = localStorage.getItem('userData');
      const { email, vin } : UserDataType = userData ? JSON.parse(userData) : {};

      // GET PROTOCOLS WITH EMAIL AND VIN

      console.log({ email, vin });

      if (!authorized) { // IF PROTOCOLS NOT AVAILABLE
        navigate(ROUTES.landing);
      }
    }
  }, [authorized, loginRequired]);

  return (
    <>
      <Outlet context={{ authorized, role }} />
    </>
  );
}

export default ProtectedRoutesWrapper;