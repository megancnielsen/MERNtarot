import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import IndexView from './views/IndexView';
import AboutView from './views/AboutView';
import TarotView from './views/TarotView';
import Calendar from './components/Calendar';
import FAQView from './views/FAQView';
import ShopView from './views/ShopView';
import AdminView from './views/AdminView';
import LoginView from './views/LoginView';
import ApptForm from './components/ApptForm';

import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";


const App = () => {
  return (

    <Layout>
      <Route exact path='/' component={IndexView} />
      <Route path='/about' component={AboutView} />
      <Route path='/tarot' component={TarotView} />
      <Route path='/schedule' component={Calendar} />
      <Route path='/FAQs' component={FAQView} />
      <Route path='/shop' component={ShopView} />
      <Route path='/administratorcontrol' component={AdminView} />
      <Route path='/login' component={LoginView} />
      <Route path='/new' component={ApptForm} />

    </Layout>
  );
}
export default App;
