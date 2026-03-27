-- ⭐ SUPABASE PORTFOLIO - FINAL SCHEMA (ROBUST) ⭐ --

-- 1. DROP EXISTING POLICIES (to allow re-running script)
DROP POLICY IF EXISTS "Public Read" ON profile;
DROP POLICY IF EXISTS "Public Read" ON experiences;
DROP POLICY IF EXISTS "Public Read" ON projects;
DROP POLICY IF EXISTS "Public Read" ON skills;
DROP POLICY IF EXISTS "Public Read" ON socials;

DROP POLICY IF EXISTS "Anon Manage" ON profile;
DROP POLICY IF EXISTS "Anon Manage" ON experiences;
DROP POLICY IF EXISTS "Anon Manage" ON projects;
DROP POLICY IF EXISTS "Anon Manage" ON skills;
DROP POLICY IF EXISTS "Anon Manage" ON socials;

DROP POLICY IF EXISTS "Allow Anon Manage" ON profile;
DROP POLICY IF EXISTS "Allow Anon Manage" ON experiences;
DROP POLICY IF EXISTS "Allow Anon Manage" ON projects;
DROP POLICY IF EXISTS "Allow Anon Manage" ON skills;
DROP POLICY IF EXISTS "Allow Anon Manage" ON socials;

-- 2. Create Tables
CREATE TABLE IF NOT EXISTS profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT DEFAULT 'Syed Mizan',
  role TEXT DEFAULT 'AI Full Stack Engineer',
  summary TEXT DEFAULT 'The Architect. Bridging high-level AI engineering with pixel-perfect tech interfaces.',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_title TEXT,
  company TEXT,
  date_range TEXT,
  description TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  tags TEXT[],
  image_url TEXT,
  demo_link TEXT,
  github_link TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE,
  display_order INT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS socials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT,
  url TEXT,
  display_order INT DEFAULT 0
);

-- 3. Initial Seed (Only if empty)
INSERT INTO profile (name, role, summary) 
SELECT 'Syed Mizan', 'AI Full Stack Engineer', 'The Architect. Bridging high-level AI engineering with pixel-perfect tech interfaces.' 
WHERE NOT EXISTS (SELECT 1 FROM profile);

INSERT INTO skills (name) 
SELECT unnest(ARRAY['Next.js', 'React', 'Supabase', 'Python']) 
WHERE NOT EXISTS (SELECT 1 FROM skills);

-- 🛡️ SECURITY: ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE socials ENABLE ROW LEVEL SECURITY;

-- 📖 PUBLIC READ ACCESS
CREATE POLICY "Public Read" ON profile FOR SELECT USING (true);
CREATE POLICY "Public Read" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public Read" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read" ON skills FOR SELECT USING (true);
CREATE POLICY "Public Read" ON socials FOR SELECT USING (true);

-- ✍️ ALLOW THE ADMIN DASHBOARD (ANON KEY) TO MANAGE DATA
CREATE POLICY "Allow Anon Manage" ON profile FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow Anon Manage" ON experiences FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow Anon Manage" ON projects FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow Anon Manage" ON skills FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow Anon Manage" ON socials FOR ALL USING (true) WITH CHECK (true);
