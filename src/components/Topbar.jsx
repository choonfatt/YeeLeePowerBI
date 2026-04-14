import React from 'react';
import { Bell, Search, UserCircle, ChevronDown, LogOut } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Topbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { currentUser, setCurrentUser, roles } = useAppContext();

    // Quick hack to derive page title from route
    const pageTitle = location.pathname.includes('/admin')
        ? 'Administration'
        : 'Reports Workspace';

    const handleRoleChange = (e) => {
        const selectedRole = roles.find(r => r.name === e.target.value);
        if (selectedRole) {
            setCurrentUser(prev => ({ ...prev, role: selectedRole }));
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/login');
    };

    return (
        <header style={{
            height: '72px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--yl-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            <div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--yl-text-main)', margin: 0 }}>
                    {pageTitle}
                </h1>
                <div style={{ fontSize: '0.85rem', color: 'var(--yl-text-muted)' }}>
                    Welcome back, {currentUser.name}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>

                <button style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--yl-text-muted)',
                    cursor: 'pointer',
                    position: 'relative'
                }}>
                    <Bell size={22} />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--yl-secondary)',
                        borderRadius: '50%',
                        border: '2px solid white'
                    }} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderLeft: '1px solid var(--yl-border)', paddingLeft: '1.5rem' }}>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--yl-text-main)' }}>{currentUser.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--yl-text-muted)' }}>{currentUser.role?.name}</div>
                    </div>
                    <UserCircle size={36} color="var(--yl-primary)" strokeWidth={1.5} />

                    <button
                        onClick={handleLogout}
                        title="Sign Out"
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--yl-text-muted)',
                            cursor: 'pointer',
                            padding: '0.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '0.5rem',
                            transition: 'color 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#EF4444'}
                        onMouseOut={e => e.currentTarget.style.color = 'var(--yl-text-muted)'}
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
