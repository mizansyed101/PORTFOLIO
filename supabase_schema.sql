-- SUPABASE PORTFOLIO SCHEMA --

-- 1. Profile Table
CREATE TABLE IF NOT EXISTS profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT DEFAULT 'Syed Mizan',
  role TEXT DEFAULT 'AI Full Stack Engineer',
  summary TEXT DEFAULT 'The Architect. Bridging high-level AI engineering with pixel-perfect tech interfaces.',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Experiences Table
CREATE TABLE IF NOT EXISTS experiences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_title TEXT,
  company TEXT,
  date_range TEXT,
  description TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  tags TEXT[], -- Postgres Array of Strings
  image_url TEXT,
  demo_link TEXT,
  github_link TEXT,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT UNIQUE,
  display_order INT DEFAULT 0
);

-- 5. Socials Table
CREATE TABLE IF NOT EXISTS socials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT,
  url TEXT,
  display_order INT DEFAULT 0
);

-- 6. Seed Initial Data (Only if empty)
INSERT INTO profile (name, role, summary) 
SELECT 'Syed Mizan', 'AI Full Stack Engineer', 'The Architect. Bridging high-level AI engineering with pixel-perfect tech interfaces.' 
WHERE NOT EXISTS (SELECT 1 FROM profile);

INSERT INTO skills (name) 
SELECT unnest(ARRAY['Next.js', 'React', 'Supabase', 'Python']) 
WHERE NOT EXISTS (SELECT 1 FROM skills);

-- Enable Row Level Security (RLS) for public read
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE socials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public Read" ON profile FOR SELECT USING (true);
CREATE POLICY "Public Read" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public Read" ON projects FOR SELECT USING (true);
CREATE POLICY "Public Read" ON skills FOR SELECT USING (true);
CREATE POLICY "Public Read" ON socials FOR SELECT USING (true);

-- Authenticated Users can CRUD (Simplified for personal use)
CREATE POLICY "Authenticated Manage" ON profile ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated Manage" ON experiences ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated Manage" ON projects ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated Manage" ON skills ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Authenticated Manage" ON socials ALL TO authenticated USING (true) WITH CHECK (true);
