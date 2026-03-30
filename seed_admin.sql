-- 1. Create the Administrator Role (if it doesn't exist)
INSERT INTO public.roles (name, description) 
VALUES ('Administrator', 'Full system access and portal management')
ON CONFLICT (name) DO NOTHING;

-- 2. Link the Administrator role to ALL categories automatically
-- This ensures the admin can see every report.
INSERT INTO public.role_permissions (role_id, category_id)
SELECT r.id, c.id 
FROM public.roles r, public.categories c
WHERE r.name = 'Administrator'
ON CONFLICT DO NOTHING;

-- 3. Provide the user mapping command:
-- Replace 'YOUR_AUTH_UUID_HERE' with the ID you copy from Supabase Auth tab
-- INSERT INTO public.app_users (id, login_id, name, department, role_id, status)
-- SELECT 'YOUR_AUTH_UUID_HERE', 'admin', 'System Administrator', 'IT', id, 'Active'
-- FROM public.roles WHERE name = 'Administrator';
