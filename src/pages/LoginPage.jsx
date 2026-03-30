import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Lock, User, ChevronRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

import { supabase } from '../lib/supabaseClient';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const { setCurrentUser } = useAppContext();

    useEffect(() => {
        // Detect recovery mode from URL hash
        if (window.location.hash.includes('type=recovery')) {
            setIsChangePasswordMode(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Fetch the corresponding app_user profile
            const { data: profile, error: profileError } = await supabase
                .from('app_users')
                .select('*, roles(*)')
                .eq('id', data.user.id)
                .single();

            if (profileError) throw profileError;

            setCurrentUser(profile);
            navigate('/reports');
        } catch (err) {
            setError(err.message || 'Failed to sign in. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setResetSuccess(false);

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/login`,
            });
            if (error) throw error;
            setResetSuccess(true);
        } catch (err) {
            setError(err.message || 'Failed to send reset link.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.updateUser({ password: newPassword });
            if (error) throw error;
            
            alert('Password updated successfully! Please log in with your new password.');
            setIsChangePasswordMode(false);
            window.location.hash = ''; // Clear hash
        } catch (err) {
            setError(err.message || 'Failed to update password.');
        } finally {
            setIsLoading(false);
        }
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
                    }}>{isChangePasswordMode ? 'Set New Password' : (isResetMode ? 'Reset Password' : 'Yee Lee Portal')}</h1>
                    <p style={{ color: 'var(--yl-text-muted)', fontSize: '0.95rem' }}>
                        {isChangePasswordMode ? 'Create a strong new password for your account' : (isResetMode ? 'Enter your email to receive a reset link' : 'Enterprise Business Intelligence Reporting')}
                    </p>
                </div>

                <form onSubmit={isChangePasswordMode ? handleUpdatePassword : (isResetMode ? handleResetPassword : handleLogin)} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {error && (
                        <div style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#fee2e2',
                            color: '#b91c1c',
                            fontSize: '0.875rem',
                            border: '1px solid #fecaca',
                            textAlign: 'center'
                        }}>
                            {error}
                        </div>
                    )}
                    {resetSuccess && !isChangePasswordMode && (
                        <div style={{
                            padding: '0.75rem',
                            borderRadius: '0.5rem',
                            backgroundColor: '#dcfce7',
                            color: '#166534',
                            fontSize: '0.875rem',
                            border: '1px solid #bbf7d0',
                            textAlign: 'center'
                        }}>
                            Reset link sent! Please check your inbox.
                        </div>
                    )}

                    {isChangePasswordMode ? (
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                New Password
                            </label>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }}>
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    className="input-field"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                    style={{ paddingLeft: '2.75rem' }}
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                Email Address
                            </label>
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }}>
                                    <User size={18} />
                                </div>
                                <input
                                    type="email"
                                    className="input-field"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ paddingLeft: '2.75rem' }}
                                />
                            </div>
                        </div>

                        {!isResetMode && (
                            <div>
                                <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                    <span>Password</span>
                                    <button
                                        type="button"
                                        onClick={() => { setError(null); setIsResetMode(true); }}
                                        style={{ background: 'none', border: 'none', color: 'var(--yl-primary)', cursor: 'pointer', fontWeight: '600', padding: 0 }}
                                    >
                                        Forgot?
                                    </button>
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
                                        required={!isResetMode}
                                        style={{ paddingLeft: '2.75rem' }}
                                    />
                                </div>
                            </div>
                        )}
                        </>
                    )}

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
                                Processing...
                            </span>
                        ) : (
                            <>
                                {isChangePasswordMode ? 'Set Password' : (isResetMode ? 'Send Reset Link' : 'Sign In')} <ChevronRight size={18} />
                            </>
                        )}
                    </button>

                    {(isResetMode || isChangePasswordMode) && (
                        <button
                            type="button"
                            onClick={() => { setError(null); setIsResetMode(false); setIsChangePasswordMode(false); }}
                            style={{ background: 'none', border: 'none', color: 'var(--yl-text-muted)', cursor: 'pointer', fontSize: '0.875rem' }}
                        >
                            &larr; Back to Login
                        </button>
                    )}
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
