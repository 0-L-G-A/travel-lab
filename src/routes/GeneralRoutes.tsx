/* eslint-disable import/no-anonymous-default-export */
import { Route } from 'react-router-dom';

import { Landing, MyProtocols, Profile, Settings } from 'scenes/General';
import { SignIn, SignUp, PasswordReset, ForgotPassword } from 'scenes/Auth';
import { DashboardNavBarWrapper, ProtectedRoutesWrapper, GuestRoutesWrapper, AuthRoutesWrapper } from 'scenes';

import { ROUTES } from './index';

export default [
  <Route element={<GuestRoutesWrapper />} key="landing">
    <Route path={ROUTES.landing} Component={Landing} />
  </Route>,
  <Route element={<ProtectedRoutesWrapper />} key="myProtocols">
    <Route element={<GuestRoutesWrapper />}>
      <Route path={ROUTES.myProtocols} Component={MyProtocols} />
    </Route>
  </Route>,
  <Route element={<ProtectedRoutesWrapper loginRequired />} key="general protected dashboard routes">
    <Route element={<DashboardNavBarWrapper />}>
      <Route path={ROUTES.profile} Component={Profile} />
      <Route path={ROUTES.settings} Component={Settings} />
    </Route>
  </Route>,
  <Route element={<AuthRoutesWrapper />} key="auth routes">
    <Route path={ROUTES.signUp} Component={SignUp} />
    <Route path={ROUTES.signIn} Component={SignIn} />
    <Route path={ROUTES.passwordReset} Component={PasswordReset} />
    <Route path={ROUTES.forgotPassword} Component={ForgotPassword} />
  </Route>,
];
