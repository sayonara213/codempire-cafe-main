import React from 'react';
import '../../App.css';
import { Theme } from './theme';
import SplashScreen from './splash-screen/splash-screen';
import AppRouter from '../AppRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
