import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  BarChart2,
  Settings,
  LogOut,
  Leaf,
  Users
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { name: 'Reports', icon: BarChart2, path: '/reports' },
    { name: 'Admin (Roles & Links)', icon: Settings, path: '/admin' }
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: 'var(--yl-surface)',
      borderRight: '1px solid var(--yl-border)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        borderBottom: '1px solid var(--yl-border)'
      }}>
        <div style={{
          backgroundColor: 'var(--yl-primary-light)',
          color: 'var(--yl-primary)',
          padding: '0.5rem',
          borderRadius: 'var(--radius-md)'
        }}>
          <Leaf size={24} strokeWidth={2.5} />
        </div>
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'var(--yl-text-main)', margin: 0 }}>Yee Lee</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--yl-text-muted)', fontWeight: '500' }}>BI Portal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '1.5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--yl-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', paddingLeft: '0.75rem' }}>
          Menu
        </div>

        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => "nav-link " + (isActive ? "active" : "")}
            style={({ isActive }) => ({
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              color: isActive ? 'var(--yl-primary)' : 'var(--yl-text-muted)',
              backgroundColor: isActive ? 'var(--yl-primary-light)' : 'transparent',
              fontWeight: isActive ? '600' : '500',
              transition: 'all 0.2s ease',
              marginBottom: '0.25rem'
            })}
          >
            <item.icon size={20} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Profile Footer */}
      <div style={{ padding: '1rem', borderTop: '1px solid var(--yl-border)' }}>
        <button
          onClick={handleLogout}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            width: '100%',
            padding: '0.75rem 1rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--yl-text-muted)',
            cursor: 'pointer',
            borderRadius: 'var(--radius-md)',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            textAlign: 'left'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#FEF2F2';
            e.currentTarget.style.color = '#EF4444';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--yl-text-muted)';
          }}
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>

      <style>{`
        .nav-link:hover:not(.active) {
          background-color: #F1F5F9;
          color: var(--yl-text-main) !important;
        }
      `}</style>
    </aside >
  );
};

export default Sidebar;
