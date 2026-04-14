import React from 'react';
import Layout from '../../components/unikampar/Layout';
import Hero from '../../components/unikampar/Hero';
import ServiceCard from '../../components/unikampar/ServiceCard';
import { Shield, Clock, Users } from 'lucide-react';

const Home = () => {
  return (
    <Layout>
      <Hero 
        title="Your Financial Needs, Our Priority."
        subtitle="Experience excellence in financial services with Unikampar Credit and Leasing. Providing trusted credit facilities since 1980."
        bgImage="/unikampar/hero.png"
        btnText="GET STARTED"
        btnLink="/unikampar/contact"
      />

      <section className="uk-section">
        <div className="uk-container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="uk-title">Why Choose Us</h2>
            <p className="uk-subtitle">Benefiting from more than four decades of expertise, we guarantee superior guidance.</p>
          </div>
          
          <div className="uk-grid">
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ background: 'var(--uk-bg-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--uk-primary)' }}>
                <Shield size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--uk-primary)' }}>INTEGRITY</h3>
              <p style={{ color: 'var(--uk-text-muted)' }}>We stand as a beacon of trust, ensuring reliability in every financial interaction.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ background: 'var(--uk-bg-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--uk-primary)' }}>
                <Clock size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--uk-primary)' }}>SPEED</h3>
              <p style={{ color: 'var(--uk-text-muted)' }}>Experience time-effective solutions with quick approvals for businesses and individuals.</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ background: 'var(--uk-bg-light)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--uk-primary)' }}>
                <Users size={40} />
              </div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--uk-primary)' }}>EXPERT TEAM</h3>
              <p style={{ color: 'var(--uk-text-muted)' }}>Benefit from our profound expertise and commitment to your financial success.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-section uk-section-alt">
        <div className="uk-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 className="uk-title">Our Services</h2>
              <p className="uk-subtitle" style={{ margin: 0 }}>Comprehensive range of hire purchase services tailored to your needs.</p>
            </div>
            <button className="uk-btn uk-btn-primary">VIEW ALL SERVICES</button>
          </div>
          
          <div className="uk-grid">
            <ServiceCard 
              title="Private Vehicles"
              description="Unlock the road to personal freedom with our hassle-free hire purchase solutions for a wide range of private vehicles."
              image="/unikampar/private_vehicle.png"
            />
            <ServiceCard 
              title="Heavy Equipment"
              description="Elevate your construction capabilities with specialized solutions for excavators, backhoes, and loaders."
              image="/unikampar/heavy_equipment.png"
            />
            <ServiceCard 
              title="Industrial Machines"
              description="Revolutionize your landscape with customized services for CNC, manufacturing, and production equipment."
              image="/unikampar/industrial_machine.png"
            />
          </div>
        </div>
      </section>

      <section className="uk-section" style={{ background: 'var(--uk-primary)', color: 'var(--uk-white)', textAlign: 'center' }}>
        <div className="uk-container">
          <h2 className="uk-title" style={{ color: 'var(--uk-white)' }}>Find out What Sets Us Apart</h2>
          <p className="uk-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Join thousands of satisfied customers who trust Unikampar for their financial growth.</p>
          <button className="uk-btn uk-btn-accent">CONTACT US TODAY</button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
