import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { SideNav } from './components/SideNav/SideNav';

const App: React.FC = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <SideNav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
}

export default App;
