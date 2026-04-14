import React, { useState, useEffect } from 'react';
import { RefreshCcw } from 'lucide-react';

const Captcha = ({ onVerify }) => {
  const [captchaData, setCaptchaData] = useState({ num1: 0, num2: 0, result: 0 });
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState('pending'); // pending, success, error

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaData({ num1, num2, result: num1 + num2 });
    setUserInput('');
    setStatus('pending');
    onVerify(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    
    if (parseInt(value) === captchaData.result) {
      setStatus('success');
      onVerify(true);
    } else if (value.length >= captchaData.result.toString().length) {
      setStatus('error');
      onVerify(false);
    } else {
      setStatus('pending');
      onVerify(false);
    }
  };

  return (
    <div className="uk-captcha-container" style={{ margin: '1rem 0' }}>
      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--uk-primary)' }}>
        Verification Required
      </label>
      <div className="uk-captcha">
        <div className="uk-captcha-code">
          {captchaData.num1} + {captchaData.num2} = ?
        </div>
        <input
          type="number"
          value={userInput}
          onChange={handleChange}
          placeholder="Result"
          style={{
            padding: '0.5rem',
            width: '80px',
            border: `2px solid ${status === 'success' ? '#22c55e' : status === 'error' ? '#ef4444' : 'var(--uk-border)'}`,
            borderRadius: '4px',
            fontSize: '1.25rem',
            textAlign: 'center',
            outline: 'none'
          }}
        />
        <button 
          type="button" 
          onClick={generateCaptcha}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--uk-primary)' }}
          title="Refresh Captcha"
        >
          <RefreshCcw size={20} />
        </button>
      </div>
      {status === 'success' && <p style={{ color: '#22c55e', fontSize: '0.75rem', marginTop: '0.25rem' }}>✓ Verified</p>}
      {status === 'error' && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>× Incorrect, try again</p>}
    </div>
  );
};

export default Captcha;
