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

  const [projects, setProjects] = useState([]);
  const [socials, setSocials] = useState([]);
  const [skills, setSkills] = useState([]);

  const syncData = async () => {
    try {
      console.log('Syncing data from Supabase...');
      
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
      console.warn('Sync failed. Schema may not be initialized.', err);
    }
  };

  const commitChanges = async () => {
    try {
      console.log('Initiating backend sync...');
      
      // 1. Profile Upsert (Fixed ID for single profile)
      const { error: pErr } = await supabase.from('profile').upsert({ 
        id: profile.id || '00000000-0000-0000-0000-000000000001', 
        name: profile.name,
        role: profile.role,
        summary: profile.summary
      });
      if (pErr) throw new Error(`Profile: ${pErr.message}`);

      // 2. Experiences
      await supabase.from('experiences').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      const { error: eErr } = await supabase.from('experiences').insert(
        experiences.map(({ id, created_at, ...rest }) => ({
          job_title: rest.job_title,
          company: rest.company,
          date_range: rest.date_range,
          description: rest.description
        }))
      );
      if (eErr) throw new Error(`Experiences: ${eErr.message}`);

      // 3. Projects (Parsing tags array)
      await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      const formattedProjects = projects.map(({ id, created_at, ...rest }) => ({
        title: rest.title,
        description: rest.description,
        tags: typeof rest.tags === 'string' ? rest.tags.split(',').map(t => t.trim()).filter(t => t) : (rest.tags || []),
        demo_link: rest.demo_link,
        github_link: rest.github_link
      }));
      const { error: prErr } = await supabase.from('projects').insert(formattedProjects);
      if (prErr) throw new Error(`Projects: ${prErr.message}`);

      // 4. Socials
      await supabase.from('socials').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      const { error: sErr } = await supabase.from('socials').insert(
        socials.map(s => ({ platform: s.platform, url: s.url }))
      );
      if (sErr) throw new Error(`Socials: ${sErr.message}`);

      // 5. Skills
      await supabase.from('skills').delete().neq('id', '00000000-0000-0000-0000-000000000000');
      const { error: skErr } = await supabase.from('skills').insert(
        skills.map(name => ({ name }))
      );
      if (skErr) throw new Error(`Skills: ${skErr.message}`);

      alert('SUCCESS: All changes synchronized to Supabase Cloud.');
      await syncData();
    } catch (err) {
      console.error('Push error:', err);
      alert(`SYNC FAILED: ${err.message}`);
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
