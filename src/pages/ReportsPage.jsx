import React, { useState } from 'react';
import {
    BarChart2,
    Search,
    Filter,
    PieChart,
    TrendingUp,
    Users,
    Box,
    ArrowLeft,
    ExternalLink,
    Lock
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const ReportsPage = () => {
    const { currentUser, categories, links } = useAppContext();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [selectedReport, setSelectedReport] = useState(null);

    // Role Based Access Control
    const userPermissions = currentUser.role?.permissions || [];

    // Filter out categories user doesn't have access to for the pills
    const allCategoriesWithAll = ['All', ...categories];
    const availableCategories = allCategoriesWithAll.filter(cat =>
        cat === 'All' || userPermissions.includes(cat)
    );

    // If active category was removed by role switch, reset to All
    if (!availableCategories.includes(activeCategory)) {
        setActiveCategory('All');
    }

    const filteredReports = links.filter(report => {
        const hasPermission = userPermissions.includes(report.category);
        const matchesCategory = activeCategory === 'All' || report.category === activeCategory;
        const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || report.status === statusFilter;
        return hasPermission && matchesCategory && matchesSearch && matchesStatus;
    });

    // Report Viewer Mode
    if (selectedReport) {
        return (
            <div className="animate-fade-in" style={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={() => setSelectedReport(null)}
                            className="btn"
                            style={{ padding: '0.5rem', backgroundColor: 'var(--yl-surface)', border: '1px solid var(--yl-border)' }}
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--yl-text-main)', margin: 0 }}>
                                {selectedReport.name}
                            </h2>
                            <div style={{ fontSize: '0.85rem', color: 'var(--yl-text-muted)' }}>
                                {selectedReport.category} • Last updated {selectedReport.lastUpdated}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Power BI Secure Embed */}
                <div className="card" style={{
                    flex: 1,
                    display: 'flex',
                    backgroundColor: '#F3F4F6',
                    position: 'relative',
                    overflow: 'hidden',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)'
                }}>
                    <iframe
                        title={selectedReport.name}
                        width="100%"
                        height="100%"
                        src={selectedReport.url}
                        frameBorder="0"
                        allowFullScreen="true"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>
            </div>
        );
    }

    // Dashboard List Mode
    return (
        <div className="animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--yl-text-main)', margin: 0 }}>Discover Reports</h2>
                    <p style={{ color: 'var(--yl-text-muted)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Browse your authorized BI dashboards</p>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ position: 'relative', width: '320px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search reports by title, category..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input-field"
                            style={{ paddingLeft: '2.75rem', borderRadius: '2rem' }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="input-field"
                            style={{
                                paddingLeft: '2.5rem',
                                borderRadius: '2rem',
                                appearance: 'none',
                                cursor: 'pointer',
                                paddingRight: '2rem',
                                backgroundColor: 'white',
                                border: '1px solid var(--yl-border)',
                                color: 'var(--yl-text-main)',
                                minWidth: '130px'
                            }}
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Draft">Draft</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <Filter size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)', pointerEvents: 'none' }} />
                    </div>
                </div>
            </div>

            {/* Categories Horizontal Scroll */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                {availableCategories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            padding: '0.5rem 1.25rem',
                            borderRadius: '2rem',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease',
                            backgroundColor: activeCategory === cat ? 'var(--yl-primary)' : 'white',
                            color: activeCategory === cat ? 'white' : 'var(--yl-text-muted)',
                            boxShadow: activeCategory === cat ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                            border: activeCategory === cat ? '1px solid var(--yl-primary)' : '1px solid var(--yl-border)'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Reports Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {filteredReports.map((report) => (
                    <div
                        key={report.id}
                        className="card"
                        onClick={() => setSelectedReport(report)}
                        style={{
                            padding: '1.5rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                            e.currentTarget.style.borderColor = 'var(--yl-primary-light)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                            e.currentTarget.style.borderColor = 'var(--yl-border)';
                        }}
                    >
                        {/* Top Accent Line */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--yl-primary)', opacity: 0.8 }} />

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: 'var(--radius-md)',
                                backgroundColor: 'var(--yl-primary-light)',
                                color: 'var(--yl-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <BarChart2 size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--yl-text-main)', margin: '0 0 0.25rem' }}>
                                    {report.name}
                                </h3>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.75rem',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '1rem',
                                    backgroundColor: '#F1F5F9',
                                    color: 'var(--yl-text-muted)',
                                    fontWeight: '500',
                                    marginRight: '0.5rem'
                                }}>
                                    {report.category}
                                </span>
                                <span style={{
                                    display: 'inline-block',
                                    fontSize: '0.7rem',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '1rem',
                                    backgroundColor: report.status === 'Active' ? '#DCFCE7' : '#FEF9C3',
                                    color: report.status === 'Active' ? '#166534' : '#854D0E',
                                    fontWeight: '600'
                                }}>
                                    {report.status}
                                </span>
                            </div>
                        </div>

                        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--yl-border)', paddingTop: '1rem', color: 'var(--yl-text-muted)', fontSize: '0.8rem' }}>
                            <span>Updated {report.lastUpdated}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <Users size={14} /> {report.views}
                            </span>
                        </div>
                    </div>
                ))}

                {filteredReports.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--yl-text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Lock size={48} style={{ opacity: 0.2, margin: '0 auto 1rem', color: 'var(--yl-secondary)' }} />
                        <h3 style={{ fontSize: '1.1rem', color: 'var(--yl-text-main)' }}>No accessible reports</h3>
                        <p style={{ maxWidth: '400px', marginTop: '0.5rem' }}>You don't have permission to view any reports matching these criteria. Contact your Administrator to request access.</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ReportsPage;
