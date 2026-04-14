import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/unikampar.css';

const Layout = ({ children }) => {
  return (
    <div className="uk-body">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
