-- Archipelago: one row per signed-in person, holding their saved items and notes.
-- Paste into Supabase > SQL Editor and run once.

create table if not exists public.atlas_profiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  email      text,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.atlas_profiles enable row level security;

-- Each person can read, create and update only their own row. There is no delete policy,
-- so the site can never delete notes.
drop policy if exists "read own"   on public.atlas_profiles;
drop policy if exists "insert own" on public.atlas_profiles;
drop policy if exists "update own" on public.atlas_profiles;
create policy "read own"   on public.atlas_profiles for select to authenticated using (auth.uid() = user_id);
create policy "insert own" on public.atlas_profiles for insert to authenticated with check (auth.uid() = user_id);
create policy "update own" on public.atlas_profiles for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update on public.atlas_profiles to authenticated;
