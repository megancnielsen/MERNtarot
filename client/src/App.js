import React from 'react';

import { Router } from '@reach/router';
import IndexView from './views/IndexView';
import AboutView from './views/AboutView';
import TarotView from './views/TarotView';
import ScheduleView from './views/ScheduleView';
import FAQView from './views/FAQView';
import ShopView from './views/ShopView';
import AdministratorView from './views/AdministratorView';

function App() {
  return (
    <div>
      <Router>
        <IndexView path= "/" />
        <AboutView path= "/about" />
        <TarotView path= "/tarot" />
        <ScheduleView path= "/schedule" />
        <FAQView path= "/FAQs" />
        <ShopView path= "/shop" />
        <AdministratorView path= "/administratorlogin" />
      </Router>
    </div>
  );
}

export default App;
