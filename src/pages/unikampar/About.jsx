import React from 'react';
import Layout from '../../components/unikampar/Layout';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="uk-section" style={{ background: 'var(--uk-primary)', color: 'var(--uk-white)', padding: '8rem 0 4rem' }}>
        <div className="uk-container">
          <h1 className="uk-title" style={{ color: 'var(--uk-white)', textAlign: 'center' }}>About Unikampar</h1>
          <p className="uk-subtitle" style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            A legacy of trust and financial empowerment since 1980.
          </p>
        </div>
      </section>

      <section className="uk-section">
        <div className="uk-container">
          <div className="uk-grid">
            <div className="uk-card">
              <div style={{ color: 'var(--uk-accent)', marginBottom: '1rem' }}><Eye size={32} /></div>
              <h2 className="uk-title" style={{ fontSize: '1.75rem' }}>VISION</h2>
              <p style={{ color: 'var(--uk-text-muted)' }}>
                At Unikampar, we envision being the epitome of a trustworthy financial partner, recognized for our reliability and commitment to delivering innovative financial solutions that meet the evolving needs of our clients.
              </p>
            </div>
            
            <div className="uk-card">
              <div style={{ color: 'var(--uk-accent)', marginBottom: '1rem' }}><Target size={32} /></div>
              <h2 className="uk-title" style={{ fontSize: '1.75rem' }}>MISSION</h2>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--uk-text-muted)' }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Accessible and Fair Credit Facilities:</strong> We are dedicated to offer credit facilities that are not only accessible but also fair, promoting financial inclusion for all.
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Diligent Support:</strong> Our mission includes providing diligent support to ensure the success of our clients in their financial endeavors.
                </li>
                <li>
                  <strong>Customer Satisfaction:</strong> Prioritizing customer satisfaction is at the core of our mission, fostering lasting and meaningful relationships.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-section uk-section-alt">
        <div className="uk-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="uk-title">What Sets Us Apart</h2>
          </div>
          
          <div className="uk-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--uk-accent)', marginBottom: '0.5rem' }}>40+</div>
              <h4 style={{ color: 'var(--uk-primary)', marginBottom: '1rem' }}>YEARS EXPERIENCE</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--uk-text-muted)' }}>Decades of expertise in the Malaysian financial landscape.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--uk-accent)', marginBottom: '0.5rem' }}>Fast</div>
              <h4 style={{ color: 'var(--uk-primary)', marginBottom: '1rem' }}>APPROVAL</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--uk-text-muted)' }}>Quick and efficient processing of your credit applications.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--uk-accent)', marginBottom: '0.5rem' }}>Loyal</div>
              <h4 style={{ color: 'var(--uk-primary)', marginBottom: '1rem' }}>SERVICE</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--uk-text-muted)' }}>Dedicated support team to guide your financial journey.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
