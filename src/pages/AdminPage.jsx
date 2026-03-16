import React, { useState, useEffect } from 'react';
import {
    Users,
    Link as LinkIcon,
    Plus,
    Search,
    MoreVertical,
    Shield,
    Edit2,
    Trash2,
    X,
    User,
    FolderTree
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const AdminPage = () => {
    const {
        roles, setRoles,
        users, setUsers,
        categories, setCategories,
        links, setLinks
    } = useAppContext();

    const [activeTab, setActiveTab] = useState('users');

    // Modals state
    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
    const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    // Editing State Trackers
    const [editingRoleId, setEditingRoleId] = useState(null);
    const [editingLinkId, setEditingLinkId] = useState(null);
    const [editingUserId, setEditingUserId] = useState(null);
    const [editingCategoryName, setEditingCategoryName] = useState(null); // Categories use strings, not objects with IDs

    // Form states
    const [newRole, setNewRole] = useState({ name: '', description: '', permissions: [] });
    const [newLink, setNewLink] = useState({ name: '', url: '', category: categories[0] || '', status: 'Active' });
    const [newUser, setNewUser] = useState({ loginId: '', password: '', name: '', department: '', roleId: roles[0]?.id || '', status: 'Active' });
    const [newCategory, setNewCategory] = useState({ name: '' });

    const handleSaveRole = (e) => {
        e.preventDefault();
        if (!newRole.name) return;

        if (editingRoleId) {
            setRoles(roles.map(r => r.id === editingRoleId ? { ...r, ...newRole } : r));
        } else {
            const roleToAdd = {
                id: roles.length + 1,
                name: newRole.name,
                description: newRole.description,
                permissions: newRole.permissions,
                users: 0
            };
            setRoles([...roles, roleToAdd]);
        }

        setNewRole({ name: '', description: '', permissions: [] });
        setEditingRoleId(null);
        setIsRoleModalOpen(false);
    };

    const handleEditRole = (role) => {
        setNewRole({ name: role.name, description: role.description, permissions: role.permissions });
        setEditingRoleId(role.id);
        setIsRoleModalOpen(true);
    };

    const handleDeleteRole = (id) => {
        if (window.confirm('Are you sure you want to delete this role?')) {
            setRoles(roles.filter(r => r.id !== id));
        }
    };

    const handleTogglePermission = (cat) => {
        setNewRole(prev => {
            const perms = prev.permissions.includes(cat)
                ? prev.permissions.filter(p => p !== cat)
                : [...prev.permissions, cat];
            return { ...prev, permissions: perms };
        });
    };

    const handleSaveLink = (e) => {
        e.preventDefault();
        if (!newLink.name || !newLink.url) return;

        if (editingLinkId) {
            setLinks(links.map(l => l.id === editingLinkId ? { ...l, ...newLink } : l));
        } else {
            const linkToAdd = {
                id: links.length + 1,
                name: newLink.name,
                url: newLink.url,
                category: newLink.category,
                status: newLink.status
            };
            setLinks([...links, linkToAdd]);
        }

        setNewLink({ name: '', url: '', category: categories[0] || '', status: 'Active' });
        setEditingLinkId(null);
        setIsLinkModalOpen(false);
    };

    const handleEditLink = (link) => {
        setNewLink({ name: link.name, url: link.url, category: link.category, status: link.status });
        setEditingLinkId(link.id);
        setIsLinkModalOpen(true);
    };

    const handleDeleteLink = (id) => {
        if (window.confirm('Are you sure you want to delete this PowerBI Link?')) {
            setLinks(links.filter(l => l.id !== id));
        }
    };

    const handleSaveUser = (e) => {
        e.preventDefault();
        if (!newUser.loginId || !newUser.password || !newUser.name) return;

        const selectedRole = roles.find(r => r.id.toString() === newUser.roleId.toString()) || roles[0];

        if (editingUserId) {
            setUsers(users.map(u => u.id === editingUserId ? { ...u, ...newUser, role: selectedRole } : u));
        } else {
            const userToAdd = {
                id: users.length + 1,
                loginId: newUser.loginId,
                password: newUser.password,
                name: newUser.name,
                department: newUser.department,
                role: selectedRole,
                status: newUser.status
            };
            setUsers([...users, userToAdd]);
            // Update user count in role mock
            setRoles(roles.map(r => r.id === selectedRole.id ? { ...r, users: r.users + 1 } : r));
        }

        setNewUser({ loginId: '', password: '', name: '', department: '', roleId: roles[0]?.id || '', status: 'Active' });
        setEditingUserId(null);
        setIsUserModalOpen(false);
    };

    const handleEditUser = (user) => {
        setNewUser({
            loginId: user.loginId,
            password: user.password,
            name: user.name,
            department: user.department,
            roleId: user.role?.id || roles[0]?.id,
            status: user.status
        });
        setEditingUserId(user.id);
        setIsUserModalOpen(true);
    };

    const handleDeleteUser = (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(u => u.id !== id));
        }
    };

    const handleSaveCategory = (e) => {
        e.preventDefault();
        if (!newCategory.name) return;

        if (editingCategoryName) {
            setCategories(categories.map(c => c === editingCategoryName ? newCategory.name : c));
            // Also update any roles or links currently using this category name
            setRoles(roles.map(r => ({
                ...r,
                permissions: r.permissions.map(p => p === editingCategoryName ? newCategory.name : p)
            })));
            setLinks(links.map(l => l.category === editingCategoryName ? { ...l, category: newCategory.name } : l));
        } else {
            if (!categories.includes(newCategory.name)) {
                setCategories([...categories, newCategory.name]);
            }
        }

        setNewCategory({ name: '' });
        setEditingCategoryName(null);
        setIsCategoryModalOpen(false);
    };

    const handleEditCategory = (categoryName) => {
        setNewCategory({ name: categoryName });
        setEditingCategoryName(categoryName);
        setIsCategoryModalOpen(true);
    };

    const handleDeleteCategory = (categoryName) => {
        if (window.confirm(`Are you sure you want to delete the category "${categoryName}"? This will remove access for roles and decouple reports.`)) {
            setCategories(categories.filter(c => c !== categoryName));
            // Cleanup references in roles and links
            setRoles(roles.map(r => ({
                ...r,
                permissions: r.permissions.filter(p => p !== categoryName)
            })));
            setLinks(links.map(l => l.category === categoryName ? { ...l, category: 'Uncategorized' } : l));
        }
    };

    const TabButton = ({ id, label, icon: Icon }) => (
        <button
            onClick={() => setActiveTab(id)}
            style={{
                padding: '0.75rem 0',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === id ? '2px solid var(--yl-primary)' : '2px solid transparent',
                color: activeTab === id ? 'var(--yl-primary)' : 'var(--yl-text-muted)',
                fontWeight: activeTab === id ? '600' : '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
            }}
        >
            <Icon size={18} />
            {label}
        </button>
    );

    const getPrimaryActionLabel = () => {
        switch (activeTab) {
            case 'users': return 'Add User';
            case 'roles': return 'Create Role';
            case 'categories': return 'Add Category';
            case 'links': return 'Add PowerBI Link';
            default: return 'Add';
        }
    };

    const handlePrimaryAction = () => {
        switch (activeTab) {
            case 'users': setIsUserModalOpen(true); break;
            case 'roles': setIsRoleModalOpen(true); break;
            case 'categories': setIsCategoryModalOpen(true); break;
            case 'links': setIsLinkModalOpen(true); break;
        }
    };

    return (
        <div className="animate-fade-in" style={{ position: 'relative' }}>

            {/* Header & Tabs */}
            <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--yl-text-main)', marginBottom: '1rem' }}>
                    Administration
                </h2>

                <div style={{
                    display: 'flex',
                    borderBottom: '1px solid var(--yl-border)',
                    gap: '2rem',
                    overflowX: 'auto'
                }}>
                    <TabButton id="users" label="User Management" icon={User} />
                    <TabButton id="roles" label="Role Management" icon={Shield} />
                    <TabButton id="categories" label="Category Setup" icon={FolderTree} />
                    <TabButton id="links" label="PowerBI Links" icon={LinkIcon} />
                </div>
            </div>

            {/* Content Area */}
            <div className="card" style={{ padding: '1.5rem' }}>

                {/* Toolbar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                }}>
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--yl-text-muted)' }} />
                        <input
                            type="text"
                            placeholder={`Search ${activeTab}...`}
                            className="input-field"
                            style={{ paddingLeft: '2.5rem' }}
                        />
                    </div>

                    <button
                        className="btn btn-primary"
                        onClick={handlePrimaryAction}
                    >
                        <Plus size={18} />
                        {getPrimaryActionLabel()}
                    </button>
                </div>

                {/* Users Table */}
                {activeTab === 'users' && (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--yl-border)', color: 'var(--yl-text-muted)' }}>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Name</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Login ID</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Department</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Role</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Status</th>
                                    <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr key={u.id} style={{ borderBottom: '1px solid var(--yl-border)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>{u.name}</td>
                                        <td style={{ padding: '1rem', color: 'var(--yl-text-muted)' }}>{u.loginId}</td>
                                        <td style={{ padding: '1rem', color: 'var(--yl-text-muted)' }}>{u.department}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ backgroundColor: 'var(--yl-primary-light)', color: 'var(--yl-primary)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '600' }}>
                                                {u.role?.name || 'Unassigned'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{ backgroundColor: u.status === 'Active' ? '#DCFCE7' : '#F1F5F9', color: u.status === 'Active' ? '#166534' : '#475569', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: '600' }}>
                                                {u.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleEditUser(u)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--yl-text-muted)', marginRight: '0.5rem' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(u.id)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Roles Table */}
                {activeTab === 'roles' && (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--yl-border)', color: 'var(--yl-text-muted)' }}>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Role Name</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Description</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Accessible Categories</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Assigned Users</th>
                                    <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roles.map((role) => (
                                    <tr key={role.id} style={{ borderBottom: '1px solid var(--yl-border)', transition: 'background-color 0.2s ease' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--yl-primary)' }} />
                                                {role.name}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem', color: 'var(--yl-text-muted)', fontSize: '0.875rem' }}>{role.description}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', maxWidth: '200px' }}>
                                                {role.permissions?.map(p => (
                                                    <span key={p} style={{ backgroundColor: '#F1F5F9', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', color: 'var(--yl-text-muted)' }}>{p}</span>
                                                ))}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                backgroundColor: 'var(--yl-primary-light)',
                                                color: 'var(--yl-primary)',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '1rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {role.users} Users
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleEditRole(role)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--yl-text-muted)', marginRight: '0.5rem' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteRole(role.id)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Categories Table */}
                {activeTab === 'categories' && (
                    <div style={{ overflowX: 'auto', maxWidth: '600px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--yl-border)', color: 'var(--yl-text-muted)' }}>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Category Name</th>
                                    <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((cat, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid var(--yl-border)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                            {cat}
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleEditCategory(cat)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--yl-text-muted)', marginRight: '0.5rem' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCategory(cat)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}


                {/* Links Table */}
                {activeTab === 'links' && (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--yl-border)', color: 'var(--yl-text-muted)' }}>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Report Name</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Category</th>
                                    <th style={{ padding: '1rem', fontWeight: '600' }}>Status</th>
                                    <th style={{ padding: '1rem', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {links.map((link) => (
                                    <tr key={link.id} style={{ borderBottom: '1px solid var(--yl-border)' }}>
                                        <td style={{ padding: '1rem', fontWeight: '500', color: 'var(--yl-text-main)' }}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yl-primary)', textDecoration: 'none' }}>
                                                {link.name}
                                            </a>
                                        </td>
                                        <td style={{ padding: '1rem', color: 'var(--yl-text-muted)' }}>{link.category}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <span style={{
                                                backgroundColor: link.status === 'Active' ? '#DCFCE7' : '#F1F5F9',
                                                color: link.status === 'Active' ? '#166534' : '#475569',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '1rem',
                                                fontSize: '0.75rem',
                                                fontWeight: '600'
                                            }}>
                                                {link.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleEditLink(link)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--yl-text-muted)', marginRight: '0.5rem' }}>
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteLink(link.id)}
                                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444' }}>
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* --- Modals --- */}

            {/* User Modal Overlay */}
            {isUserModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 100, backdropFilter: 'blur(4px)'
                }}>
                    <div className="card animate-fade-in" style={{ width: '450px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Add User</h3>
                            <button onClick={() => setIsUserModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} color="var(--yl-text-muted)" /></button>
                        </div>
                        <form onSubmit={handleSaveUser} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Login ID / Employee ID</label>
                                <input type="text" className="input-field" value={newUser.loginId} onChange={e => setNewUser({ ...newUser, loginId: e.target.value })} required />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Temporary Password</label>
                                <input type="password" className="input-field" value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} required />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Full Name</label>
                                    <input type="text" className="input-field" value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} required />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Department</label>
                                    <input type="text" className="input-field" value={newUser.department} onChange={e => setNewUser({ ...newUser, department: e.target.value })} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Role Assignment</label>
                                    <select className="input-field" value={newUser.roleId} onChange={e => setNewUser({ ...newUser, roleId: e.target.value })}>
                                        {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                                    </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Account Status</label>
                                    <select className="input-field" value={newUser.status} onChange={e => setNewUser({ ...newUser, status: e.target.value })}>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, backgroundColor: '#F1F5F9' }} onClick={() => setIsUserModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save User</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Category Modal Overlay */}
            {isCategoryModalOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 100, backdropFilter: 'blur(4px)'
                }}>
                    <div className="card animate-fade-in" style={{ width: '400px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Add Category</h3>
                            <button onClick={() => setIsCategoryModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} color="var(--yl-text-muted)" /></button>
                        </div>
                        <form onSubmit={handleSaveCategory} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Category Name</label>
                                <input type="text" className="input-field" placeholder="e.g. Marketing" value={newCategory.name} onChange={e => setNewCategory({ name: e.target.value })} required />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, backgroundColor: '#F1F5F9' }} onClick={() => setIsCategoryModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Role Modal Overlay */}
            {isRoleModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    backdropFilter: 'blur(4px)'
                }}>
                    <div className="card animate-fade-in" style={{ width: '450px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Create New Role</h3>
                            <button onClick={() => setIsRoleModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={20} color="var(--yl-text-muted)" />
                            </button>
                        </div>
                        <form onSubmit={handleSaveRole} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Role Name</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="e.g. Data Analyst"
                                    value={newRole.name}
                                    onChange={e => setNewRole({ ...newRole, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Accessible Report Categories</label>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            type="button"
                                            onClick={() => handleTogglePermission(cat)}
                                            style={{
                                                padding: '0.4rem 0.8rem',
                                                borderRadius: '2rem',
                                                border: newRole.permissions.includes(cat) ? '1px solid var(--yl-primary)' : '1px solid var(--yl-border)',
                                                backgroundColor: newRole.permissions.includes(cat) ? 'var(--yl-primary-light)' : 'white',
                                                color: newRole.permissions.includes(cat) ? 'var(--yl-primary)' : 'var(--yl-text-muted)',
                                                fontSize: '0.85rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                fontWeight: '500'
                                            }}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--yl-text-muted)', display: 'block', marginTop: '0.5rem' }}>
                                    Users with this role will only see reports in the selected categories.
                                </span>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Description (Optional)</label>
                                <textarea
                                    className="input-field"
                                    placeholder="Briefly describe this role's purpose..."
                                    value={newRole.description}
                                    onChange={e => setNewRole({ ...newRole, description: e.target.value })}
                                    rows={2}
                                    style={{ resize: 'none' }}
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, backgroundColor: '#F1F5F9' }} onClick={() => setIsRoleModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Role</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Link Modal Overlay */}
            {isLinkModalOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 100,
                    backdropFilter: 'blur(4px)'
                }}>
                    <div className="card animate-fade-in" style={{ width: '450px', padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Add PowerBI Link</h3>
                            <button onClick={() => setIsLinkModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={20} color="var(--yl-text-muted)" />
                            </button>
                        </div>
                        <form onSubmit={handleSaveLink} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Report Name</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    placeholder="e.g. Monthly KPI"
                                    value={newLink.name}
                                    onChange={e => setNewLink({ ...newLink, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Report Category</label>
                                    <select
                                        className="input-field"
                                        value={newLink.category}
                                        onChange={e => setNewLink({ ...newLink, category: e.target.value })}
                                        required
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>Report Status</label>
                                    <select
                                        className="input-field"
                                        value={newLink.status}
                                        onChange={e => setNewLink({ ...newLink, status: e.target.value })}
                                        required
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Draft">Draft</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>PowerBI Embed URL</label>
                                <input
                                    type="url"
                                    className="input-field"
                                    placeholder="https://app.powerbi.com/view..."
                                    value={newLink.url}
                                    onChange={e => setNewLink({ ...newLink, url: e.target.value })}
                                    required
                                />
                                <span style={{ fontSize: '0.75rem', color: 'var(--yl-text-muted)', marginTop: '0.25rem', display: 'block' }}>
                                    Paste the public or organizational embed URL here.
                                </span>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" className="btn" style={{ flex: 1, backgroundColor: '#F1F5F9' }} onClick={() => setIsLinkModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Save Link</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AdminPage;
