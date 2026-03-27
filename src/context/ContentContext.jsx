import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Syed Mizan',
    role: 'AI Full Stack Engineer',
    summary: 'The Architect. Bridging high-level AI engineering with pixel-perfect, brutalist frontends. Based in Kolkata.'
  });

  const [experiences, setExperiences] = useState([
    { id: '1', job_title: 'AI Engineer', company: 'Cognizant / Macy\'s', date_range: '2022 — Present', description: 'Developing high-performance digital experiences and AI-driven platforms.' },
    { id: '2', job_title: 'Managing Director', company: 'Galaxy Traders', date_range: '2020 — Present', description: 'Leading digital transformation and automation.' }
  ]);

  const [projects, setProjects] = useState([
    { id: '1', title: 'GALAXY TRADERS SITE', description: 'Full-stack chemical supply-chain platform.', tags: ['Next.js', 'Supabase', 'Tailwind'], image_url: 'https://via.placeholder.com/600x400/0A0A0A/00FFD1?text=GALAXY+TRADERS', demo_link: '#', github_link: '#' }
  ]);

  const [socials, setSocials] = useState([
    { id: '1', platform: 'Github', url: 'https://github.com/mizansyed101' },
    { id: '2', platform: 'LinkedIn', url: '#' },
    { id: '3', platform: 'Email', url: 'mailto:mizansyedwork@gmail.com' }
  ]);

  const [skills, setSkills] = useState(['Next.js', 'React', 'Supabase', 'Python']);

  const syncData = async () => {
    try {
      console.log('Syncing data with Supabase...');
      
      const { data: prof } = await supabase.from('profile').select('*').single();
      if (prof) setProfile(prof);

      const { data: exps } = await supabase.from('experiences').select('*').order('created_at', { ascending: true });
      if (exps) setExperiences(exps);

      const { data: projs } = await supabase.from('projects').select('*').order('created_at', { ascending: true });
      if (projs) setProjects(projs);

      const { data: socs } = await supabase.from('socials').select('*').order('created_at', { ascending: true });
      if (socs) setSocials(socs);

      const { data: sks } = await supabase.from('skills').select('*').order('id', { ascending: true });
      if (sks) setSkills(sks.map(s => s.name));

    } catch (err) {
      console.warn('Supabase fetch error. Check if SQL schema is initialized.', err);
    }
  };

  const commitChanges = async () => {
    try {
      // 1. Profile Upsert (Keep one row for simplicity)
      await supabase.from('profile').upsert({ id: profile.id, ...profile });

      // 2. Experiences - Clear and Replace (Simple for personal portfolio sync)
      await supabase.from('experiences').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await supabase.from('experiences').insert(experiences.map(({ id, ...rest }) => rest));

      // 3. Projects
      await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await supabase.from('projects').insert(projects.map(({ id, ...rest }) => rest));

      // 4. Socials
      await supabase.from('socials').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await supabase.from('socials').insert(socials.map(({ id, ...rest }) => rest));

      // 5. Skills
      await supabase.from('skills').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      await supabase.from('skills').insert(skills.map(name => ({ name })));

      alert('Portfolio State Synchronized with Supabase Cloud!');
    } catch (err) {
      console.error('Push error:', err);
      alert('Error updating Supabase dashboard.');
    }
  };

  useEffect(() => {
    syncData();
  }, []);

  const updateProfile = (newProfile) => setProfile(prev => ({ ...prev, ...newProfile }));
  const updateExperiences = (newExp) => setExperiences(newExp);
  const updateProjects = (newProj) => setProjects(newProj);
  const updateSocials = (newSoc) => setSocials(newSoc);
  const updateSkills = (newSkills) => setSkills(newSkills);

  return (
    <ContentContext.Provider value={{
      profile, experiences, projects, socials, skills,
      updateProfile, updateExperiences, updateProjects, updateSocials, updateSkills,
      syncData, commitChanges
    }}>
      {children}
    </ContentContext.Provider>
  );
};


export const useContent = () => useContext(ContentContext);
