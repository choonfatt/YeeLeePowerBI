import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="uk-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '200px', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--uk-primary)', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--uk-text-muted)', fontSize: '0.925rem', flexGrow: 1, marginBottom: '1.5rem' }}>
        {description}
      </p>
      <button className="uk-btn uk-btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: 'fit-content' }}>
        Learn More <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
