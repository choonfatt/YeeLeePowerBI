import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [roles, setRoles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [links, setLinks] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Fetch categories
            const { data: catData } = await supabase.from('categories').select('*');
            setCategories(catData?.map(c => c.name) || []);

            // Fetch roles and their permissions
            const { data: rolesData } = await supabase.from('roles').select(`
                *,
                role_permissions (
                    categories (name)
                )
            `);
            const formattedRoles = rolesData?.map(r => ({
                ...r,
                permissions: r.role_permissions.map(p => p.categories.name)
            })) || [];
            setRoles(formattedRoles);

            // Fetch links
            const { data: linksData } = await supabase.from('powerbi_links').select(`
                *,
                categories (name)
            `);
            const formattedLinks = linksData?.map(l => ({
                ...l,
                category: l.categories?.name,
                // Map DB names to expected UI names if necessary
            })) || [];
            setLinks(formattedLinks);

            // Fetch users
            const { data: usersData } = await supabase.from('app_users').select(`
                *,
                roles (*)
            `);
            setUsers(usersData || []);
            
            // Set default admin if no current user (for dev/init)
            if (usersData && usersData.length > 0) {
                setCurrentUser(usersData[0]);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{
            currentUser, setCurrentUser,
            roles, setRoles,
            categories, setCategories,
            users, setUsers,
            links, setLinks,
            loading, refreshData: fetchData
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
