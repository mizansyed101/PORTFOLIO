-- Create a table for the main profile
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    role TEXT NOT NULL,
    summary TEXT NOT NULL,
    avatar_url TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for experience
CREATE TABLE experiences (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_title TEXT NOT NULL,
    company TEXT NOT NULL,
    date_range TEXT NOT NULL,
    description TEXT NOT NULL,
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for projects
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    demo_link TEXT,
    github_link TEXT,
    tags TEXT[] DEFAULT '{}',
    sort_order INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for skills/technologies
CREATE TABLE skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    category TEXT, -- 'Frontend', 'Backend', 'Tool', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read-only access
CREATE POLICY "Public read access" ON profiles FOR SELECT USING (true);
CREATE POLICY "Public read access" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON skills FOR SELECT USING (true);

-- Create policies for authenticated write access (Admin)
CREATE POLICY "Admin update" ON profiles FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON experiences FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin update" ON skills FOR ALL USING (auth.role() = 'authenticated');
