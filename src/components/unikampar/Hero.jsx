import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, bgImage, btnText, btnLink }) => {
  return (
    <section className="uk-hero">
      <img src={bgImage} alt="Hero Background" className="uk-hero-bg" />
      <div className="uk-hero-overlay"></div>
      <div className="uk-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="uk-hero-content">
          <h1 className="uk-title" style={{ color: 'var(--uk-white)', fontSize: '3.5rem', marginBottom: '1rem' }}>
            {title}
          </h1>
          <p className="uk-subtitle" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2.5rem' }}>
            {subtitle}
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to={btnLink} className="uk-btn uk-btn-accent">
              {btnText}
            </Link>
            <Link to="/unikampar/services" className="uk-btn" style={{ border: '2px solid var(--uk-white)', color: 'var(--uk-white)' }}>
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
