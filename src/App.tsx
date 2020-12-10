import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { SideNav } from './components/SideNav/SideNav';

const App: React.FC = () => {
  return <>
    <BrowserRouter>
      <Navbar />
      <SideNav />
    </BrowserRouter>
  </>
}

export default App;
