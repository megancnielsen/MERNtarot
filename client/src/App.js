import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import IndexView from './views/IndexView';
import AboutView from './views/AboutView';
import TarotView from './views/TarotView';
import CalendarView from './views/CalendarView';
import FAQView from './views/FAQView';
import ShopView from './views/ShopView';
import AdminView from './views/AdminView';
import LoginView from './views/LoginView';
import ApptForm from './components/ApptForm';

const App = () => {
  return (

    <Layout>
      <Route exact path='/' component={IndexView} />
      <Route path='/about' component={AboutView} />
      <Route path='/tarot' component={TarotView} />
      <Route path='/schedule' component={CalendarView} />
      <Route path='/FAQs' component={FAQView} />
      <Route path='/shop' component={ShopView} />
      <Route path='/administratorcontrol' component={AdminView} />
      <Route path='/login' component={LoginView} />
      <Route path='/new' component={ApptForm} />
    </Layout>
  );
}
export default App;
