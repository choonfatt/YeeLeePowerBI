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
            // 1. Fetch Categories
            const { data: catData } = await supabase.from('categories').select('*');
            setCategories(catData?.map(c => c.name) || []);

            // 2. Fetch Roles and their permissions
            const { data: rolesData } = await supabase.from('roles').select(`
                *,
                role_permissions (
                    categories (name)
                )
            `);
            const formattedRoles = rolesData?.map(r => ({
                ...r,
                permissions: r.role_permissions?.map(p => p.categories?.name).filter(Boolean) || []
            })) || [];
            setRoles(formattedRoles);

            // 3. Check active session and augment profile
            const { data: { session } } = await supabase.auth.getSession();
            let loggedInUser = null;

            if (session?.user) {
                const { data: profile } = await supabase
                    .from('app_users')
                    .select('*, roles(*)')
                    .eq('id', session.user.id)
                    .single();
                
                if (profile) {
                    // Find the role with permissions in our formatted list
                    const roleWithPermissions = formattedRoles.find(r => r.id === profile.role_id);
                    loggedInUser = {
                        ...profile,
                        role: roleWithPermissions || profile.roles // Fallback to basic role info
                    };
                    setCurrentUser(loggedInUser);
                }
            }

            // Fetch links
            const { data: linksData } = await supabase.from('powerbi_links').select(`
                *,
                categories (name)
            `);
            const formattedLinks = linksData?.map(l => ({
                ...l,
                category: l.categories?.name || 'Uncategorized'
            })) || [];
            setLinks(formattedLinks);

            // Fetch all users list (if logged in as admin)
            if (loggedInUser) {
                const { data: usersData } = await supabase.from('app_users').select(`
                    *,
                    roles (*)
                `);
                setUsers(usersData || []);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                setCurrentUser(null);
            } else if (!currentUser) {
                fetchData(); // Re-fetch if session appears but profile is missing
            }
        });

        return () => subscription.unsubscribe();
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
