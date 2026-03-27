-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Create Categories Table
-- Categories dictate what reports a role can see.
create table public.categories (
    id uuid default uuid_generate_v4() primary key,
    name text not null unique,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert initial categories
insert into public.categories (name) values 
    ('Finance'), ('Sales'), ('HR'), ('Operations'), ('Executive');

-- 2. Create Roles Table
create table public.roles (
    id uuid default uuid_generate_v4() primary key,
    name text not null unique,
    description text,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Role_Permissions Junction Table
-- Maps Roles to Categories (Many-to-Many)
create table public.role_permissions (
    role_id uuid references public.roles(id) on delete cascade,
    category_id uuid references public.categories(id) on delete cascade,
    primary key (role_id, category_id)
);

-- 4. Create App_Users Table
-- (Extends Supabase Auth users to keep application data separate/clean)
create table public.app_users (
    id uuid references auth.users(id) on delete cascade primary key,
    login_id text not null unique, -- Employee ID
    name text not null,
    department text,
    role_id uuid references public.roles(id) on delete set null,
    status text default 'Active' check (status in ('Active', 'Inactive')),
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Create PowerBI_Links Table
create table public.powerbi_links (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    url text not null,
    category_id uuid references public.categories(id) on delete set null,
    views integer default 0,
    status text default 'Active' check (status in ('Active', 'Draft', 'Inactive')),
    last_updated timestamp with time zone default timezone('utc'::text, now()) not null
);
