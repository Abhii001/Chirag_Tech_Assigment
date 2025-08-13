import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';
import Nav from './component/Nav';
import { CategoriesProvider } from './utilis/CategoriesContext';

function App() {
  return (
    <CategoriesProvider>
      <Nav />
      <Outlet />
      <Footer />
    </CategoriesProvider>
  );
}

export default App;
