-- -------------------------------------------------------------
-- ONE-CLICK USER CREATION FUNCTION
-- -------------------------------------------------------------
-- This function allows an Administrator to create a new user 
-- (Auth + Profile) in a single action from the portal.

-- Enable the required pgcrypto extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE OR REPLACE FUNCTION create_portal_user(
    p_login_id TEXT,
    p_password TEXT,
    p_name TEXT,
    p_department TEXT,
    p_role_id UUID
) RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER -- Runs as the Master user to allow Auth creation
AS $$
DECLARE
  new_user_id UUID;
  v_email TEXT;
BEGIN
  -- 1. SECURITY CHECK: Only allow Administrators to call this
  IF NOT EXISTS (
    SELECT 1 FROM public.app_users au
    JOIN public.roles r ON au.role_id = r.id
    WHERE au.id = auth.uid() AND r.name = 'Administrator'
  ) THEN
    RAISE EXCEPTION 'Unauthorized: Only Administrators can create users.';
  END IF;

  v_email := LOWER(p_login_id) || '@yeelee.portal';

  -- 2. CREATE AUTH USER
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at,
    confirmation_token,
    recovery_token,
    email_change_token_new,
    email_change
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    v_email,
    crypt(p_password, gen_salt('bf')),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    now(),
    now(),
    '',
    '',
    '',
    ''
  )
  RETURNING id INTO new_user_id;

  -- 3. CREATE IDENTITY (Required for login to work)
  INSERT INTO auth.identities (
    id,
    user_id,
    identity_data,
    provider,
    last_sign_in_at,
    created_at,
    updated_at
  )
  VALUES (
    new_user_id,
    new_user_id,
    format('{"sub":"%s","email":"%s"}', new_user_id, v_email)::jsonb,
    'email',
    now(),
    now(),
    now()
  );

  -- 4. CREATE APP_USER PROFILE
  INSERT INTO public.app_users (id, login_id, name, department, role_id, status)
  VALUES (new_user_id, p_login_id, p_name, p_department, p_role_id, 'Active');

  RETURN new_user_id;
END;
$$;
