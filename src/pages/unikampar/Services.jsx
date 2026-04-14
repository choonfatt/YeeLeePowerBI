import React from 'react';
import Layout from '../../components/unikampar/Layout';
import { Car, Truck, HardHat, Cog, Bus } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Car size={32} />,
      title: "Private Vehicles",
      details: "Unlock the road to personal freedom with our hassle-free hire purchase solutions for a wide range of private vehicles, ensuring you drive away with confidence."
    },
    {
      icon: <Bus size={32} />,
      title: "Bus",
      details: "Empower your transportation ventures with our flexible hire purchase plans tailored for buses, offering a smooth journey towards efficiency and reliability."
    },
    {
      icon: <Truck size={32} />,
      title: "Commercial Vehicles",
      details: "Accelerate your business logistics with our tailored hire purchase services for commercial vehicles, including lorries, prime movers, and trailers."
    },
    {
      icon: <HardHat size={32} />,
      title: "Heavy Equipment",
      details: "Elevate your construction capabilities with our specialized hire purchase solutions for heavy equipment, including excavators, backhoes, and loaders."
    },
    {
      icon: <Cog size={32} />,
      title: "Industrial Machines",
      details: "Revolutionize your industrial landscape with our customized hire purchase services for machines, encompassing CNC, manufacturing, and production equipment."
    }
  ];

  return (
    <Layout>
      <section className="uk-section" style={{ background: 'var(--uk-bg-light)', padding: '6rem 0' }}>
        <div className="uk-container">
          <h1 className="uk-title" style={{ textAlign: 'center' }}>Our Services</h1>
          <p className="uk-subtitle" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Explore a comprehensive range of hire purchase services tailored to your diverse financial needs.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {servicesList.map((service, index) => (
              <div key={index} className="uk-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--uk-primary)', color: 'var(--uk-white)', padding: '1.5rem', borderRadius: '8px' }}>
                  {service.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--uk-primary)', marginBottom: '1rem' }}>{service.title}</h3>
                  <p style={{ color: 'var(--uk-text-muted)', fontSize: '1rem' }}>{service.details}</p>
                  <button className="uk-btn" style={{ padding: '0.5rem 0', color: 'var(--uk-accent)', fontWeight: '700', fontSize: '0.875rem', marginTop: '1rem', background: 'none' }}>
                    ENQUIRE NOW →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="uk-section" style={{ background: 'var(--uk-primary)', color: 'var(--uk-white)', textAlign: 'center' }}>
        <div className="uk-container">
          <h2 className="uk-title" style={{ color: 'var(--uk-white)' }}>Need a Custom Financial Solution?</h2>
          <p className="uk-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>Our experts are ready to design a plan that fits your business perfectly.</p>
          <button className="uk-btn uk-btn-accent">BOOK A CONSULTATION</button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
