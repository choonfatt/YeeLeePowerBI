import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="uk-navbar">
      <div className="uk-container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link to="/unikampar" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--uk-primary)', lineHeight: '1' }}>UNIKAMPAR</span>
          <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--uk-accent)', letterSpacing: '1px' }}>CREDIT & LEASING</span>
        </Link>
        
        <div className="uk-nav-links">
          <Link to="/unikampar" className="uk-nav-link">HOME</Link>
          <Link to="/unikampar/about" className="uk-nav-link">ABOUT</Link>
          <Link to="/unikampar/services" className="uk-nav-link">SERVICES</Link>
          <Link to="/unikampar/contact" className="uk-nav-link">CONTACT</Link>
        </div>
        
        <div className="uk-mobile-toggle" style={{ display: 'none' }}>
          {/* Mobile menu icon could go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
