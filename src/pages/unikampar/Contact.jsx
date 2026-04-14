import React, { useState } from 'react';
import Layout from '../../components/unikampar/Layout';
import Captcha from '../../components/unikampar/Captcha';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
    console.log("Form Submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="uk-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
          <div className="uk-container" style={{ textAlign: 'center' }}>
            <div style={{ background: '#dcfce7', color: '#166534', padding: '2rem', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h2 className="uk-title" style={{ color: '#166534' }}>Thank You!</h2>
              <p>Your query has been submitted successfully. Our team will contact you shortly.</p>
              <button onClick={() => setIsSubmitted(false)} className="uk-btn uk-btn-primary" style={{ marginTop: '2rem' }}>SEND ANOTHER QUERY</button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="uk-section" style={{ background: 'var(--uk-primary)', color: 'var(--uk-white)', padding: '6rem 0 3rem' }}>
        <div className="uk-container">
          <h1 className="uk-title" style={{ color: 'var(--uk-white)' }}>Contact Us</h1>
          <p className="uk-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>We are here to help you with your financial needs.</p>
        </div>
      </section>

      <section className="uk-section">
        <div className="uk-container">
          <div className="uk-grid" style={{ gridTemplateColumns: '1fr 1.5fr' }}>
            {/* Contact Info */}
            <div>
              <div className="uk-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--uk-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={20} /> Ipoh Office
                </h3>
                <p style={{ color: 'var(--uk-text-muted)', fontSize: '0.875rem' }}>
                  29, Jalan Sultan Nazrin Shah,<br />
                  30250 Ipoh, Perak.<br />
                  <strong>T:</strong> 05-255 5599
                </p>
              </div>

              <div className="uk-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--uk-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={20} /> KL Office
                </h3>
                <p style={{ color: 'var(--uk-text-muted)', fontSize: '0.875rem' }}>
                  Unit 7-02, VIDA Bukit Ceylon,<br />
                  1D, Jalan Ceylon,<br />
                  50200 Kuala Lumpur.<br />
                  <strong>T:</strong> 03-2022 2028
                </p>
              </div>

              <div className="uk-card">
                <h3 style={{ color: 'var(--uk-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={20} /> General Enquiries
                </h3>
                <p style={{ color: 'var(--uk-text-muted)', fontSize: '0.875rem' }}>
                  customerservice@unikampar.com.my
                </p>
              </div>
            </div>

            {/* Query Form */}
            <div className="uk-card">
              <h2 className="uk-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send us a Query</h2>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input type="text" name="name" required style={inputStyle} value={formData.name} onChange={handleChange} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" name="email" required style={inputStyle} value={formData.email} onChange={handleChange} />
                  </div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Subject</label>
                  <input type="text" name="subject" required style={inputStyle} value={formData.subject} onChange={handleChange} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Message</label>
                  <textarea name="message" rows="5" required style={{ ...inputStyle, resize: 'vertical' }} value={formData.message} onChange={handleChange}></textarea>
                </div>

                {/* CAPTCHA */}
                <Captcha onVerify={setIsVerified} />

                <button 
                  type="submit" 
                  className={`uk-btn ${isVerified ? 'uk-btn-primary' : ''}`} 
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.75rem',
                    opacity: isVerified ? 1 : 0.5,
                    cursor: isVerified ? 'pointer' : 'not-allowed',
                    backgroundColor: isVerified ? 'var(--uk-primary)' : '#cbd5e1'
                  }}
                  disabled={!isVerified}
                >
                  SUBMIT QUERY <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '600',
  marginBottom: '0.5rem',
  color: 'var(--uk-primary)'
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid var(--uk-border)',
  borderRadius: '4px',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default Contact;
