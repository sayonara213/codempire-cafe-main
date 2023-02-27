import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './global/Layout';
import Login from './auth/login/login';
import SplashScreen from './global/splash-screen/splash-screen';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/auth' element={<Login />} />
        <Route path={'/splash'} element={<SplashScreen />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
