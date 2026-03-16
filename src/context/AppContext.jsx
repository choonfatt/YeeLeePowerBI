import React, { createContext, useContext, useState } from 'react';

// Default mock roles with categorized permissions
export const MOCK_ROLES = [
    { id: 1, name: 'Executive Management', users: 12, description: 'Full access to all regional reports and financial overviews.', permissions: ['Finance', 'Sales', 'HR', 'Operations', 'Executive'] },
    { id: 2, name: 'Regional Director', users: 8, description: 'Access to specific region sales and performance metrics.', permissions: ['Sales', 'Operations'] },
    { id: 3, name: 'Sales Manager', users: 45, description: 'Access to branch level reporting and team performance.', permissions: ['Sales', 'HR'] },
    { id: 4, name: 'Account Executive', users: 435, description: 'Basic access to personal sales targets and territory reports.', permissions: ['Sales'] },
];

const AppContext = createContext();

export const MOCK_CATEGORIES = ['Finance', 'Sales', 'HR', 'Operations', 'Executive'];

export const MOCK_USERS = [
    { id: 1, loginId: 'admin', password: 'password123', name: 'Admin User', department: 'IT Department', role: MOCK_ROLES[0], status: 'Active' },
    { id: 2, loginId: 'jdoe', password: 'password123', name: 'John Doe', department: 'Sales', role: MOCK_ROLES[2], status: 'Active' },
];

export const MOCK_LINKS = [
    { id: 1, name: 'Q3 Financial Summary', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Finance', lastUpdated: '2 hours ago', views: 124, status: 'Active' },
    { id: 2, name: 'Regional Monthly Sales', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Sales', lastUpdated: '1 hour ago', views: 890, status: 'Active' },
    { id: 3, name: 'Executive Branch KPI', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Executive', lastUpdated: '1 day ago', views: 42, status: 'Active' },
    { id: 4, name: 'Headcount & Onboarding', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'HR', lastUpdated: '3 days ago', views: 15, status: 'Active' },
    { id: 5, name: 'Warehouse Inventory Levels', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Operations', lastUpdated: '5 hours ago', views: 304, status: 'Draft' },
    { id: 6, name: 'YTD Profit Margins', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Finance', lastUpdated: '10 hours ago', views: 89, status: 'Active' },
    { id: 7, name: 'Sales Rep Performance', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Sales', lastUpdated: '2 days ago', views: 450, status: 'Active' },
    { id: 8, name: 'Logistics Supply Chain', url: 'https://playground.powerbi.com/sampleReportEmbed', category: 'Operations', lastUpdated: '1 week ago', views: 120, status: 'Draft' },
];

export const AppProvider = ({ children }) => {
    const [roles, setRoles] = useState(MOCK_ROLES);
    const [categories, setCategories] = useState(MOCK_CATEGORIES);
    const [users, setUsers] = useState(MOCK_USERS);
    const [links, setLinks] = useState(MOCK_LINKS);
    const [currentUser, setCurrentUser] = useState(users[0]);

    return (
        <AppContext.Provider value={{
            currentUser, setCurrentUser,
            roles, setRoles,
            categories, setCategories,
            users, setUsers,
            links, setLinks
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
