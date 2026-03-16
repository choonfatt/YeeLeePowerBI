import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Lock, User, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { users, setCurrentUser } = useAppContext();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            setIsLoading(false);
            const user = users.find(u => u.loginId.toLowerCase() === email.toLowerCase()) || users[0];
            setCurrentUser(user);
            navigate('/reports');
        }, 1200);
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, var(--yl-primary) 0%, #450a0a 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative background elements */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, rgba(255,255,255,0) 70%)',
                top: '-100px',
                right: '-100px',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%)',
                bottom: '-200px',
                left: '-200px',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <div className="card animate-fade-in" style={{
                width: '100%',
                maxWidth: '440px',
                padding: '3rem 2.5rem',
                position: 'relative',
                zIndex: 10,
                margin: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(10px)',
                boxShadow: 'var(--shadow-glow), 0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255,255,255,0.2)'
            }}>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--yl-primary-light)',
                        color: 'var(--yl-primary)',
                        marginBottom: '1rem'
                    }}>
                        <Leaf size={32} strokeWidth={2.5} />
                    </div>
                    <h1 style={{
                        fontSize: '1.75rem',
                        fontWeight: '700',
                        color: 'var(--yl-text-main)',
                        marginBottom: '0.5rem'
                    }}>Yee Lee Portal</h1>
                    <p style={{ color: 'var(--yl-text-muted)', fontSize: '0.95rem' }}>
                        Enterprise Business Intelligence Reporting
                    </p>
                </div>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                            Employee ID or Email
                        </label>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }}>
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Enter your credentials"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ paddingLeft: '2.75rem' }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                            <span>Password</span>
                            <a href="#" style={{ color: 'var(--yl-primary)', textDecoration: 'none', fontWeight: '600' }}>Forgot?</a>
                        </label>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }}>
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                className="input-field"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ paddingLeft: '2.75rem' }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                        style={{
                            marginTop: '1rem',
                            padding: '0.875rem',
                            fontSize: '1rem',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {isLoading ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{
                                    width: '18px',
                                    height: '18px',
                                    border: '2px solid rgba(255,255,255,0.3)',
                                    borderTopColor: 'white',
                                    borderRadius: '50%',
                                    animation: 'spin 1s linear infinite'
                                }} />
                                Authenticating...
                            </span>
                        ) : (
                            <>
                                Sign In <ChevronRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--yl-text-muted)' }}>
                    Integrity Before Profits. &copy; {new Date().getFullYear()} Yee Lee Corp.
                </div>
            </div>
            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default LoginPage;
