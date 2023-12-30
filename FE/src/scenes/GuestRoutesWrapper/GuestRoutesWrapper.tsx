import { Outlet, useOutletContext } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

type ContextType = {
  authorized: boolean,
  role?: string,
};

const GuestRoutesWrapper = () => {
  const context = useOutletContext<ContextType>();

  return (
    <>
      <Header authorized={context ? context.authorized : false} />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestRoutesWrapper;
