import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="uk-footer">
      <div className="uk-container">
        <div className="uk-footer-grid">
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--uk-white)', display: 'block' }}>UNIKAMPAR</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--uk-accent)' }}>CREDIT & LEASING SDN BHD</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              Your Financial Needs, Our Priority. Providing accessible and fair credit facilities since 1980.
            </p>
          </div>
          
          <div>
            <h4 className="uk-footer-title">MENU</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/unikampar" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/unikampar/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Us</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/unikampar/services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Services</Link></li>
              <li style={{ marginBottom: '0.5rem' }}><Link to="/unikampar/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="uk-footer-title">IPOH OFFICE</h4>
            <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              29, Jalan Sultan Nazrin Shah,<br />
              30250 Ipoh, Perak.<br />
              T: 05-255 5599
            </address>
          </div>
          
          <div>
            <h4 className="uk-footer-title">KL OFFICE</h4>
            <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
              Unit 7-02, VIDA Bukit Ceylon,<br />
              1D, Jalan Ceylon,<br />
              50200 Kuala Lumpur.<br />
              T: 03-2022 2028
            </address>
          </div>
        </div>
        
        <div className="uk-footer-bottom">
          <p>© 2024 UNIKAMPAR CREDIT AND LEASING SDN BHD | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
