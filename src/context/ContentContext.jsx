import { createContext, useContext, useState, useEffect } from 'react';

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

  const syncData = async () => {
    try {
      const res = await fetch('/api/content');
      const data = await res.json();
      if (data.profile) {
        setProfile(data.profile);
        setExperiences(data.experiences);
        setProjects(data.projects);
        setSocials(data.socials);
      }
      console.log('Syncing data with Redis backend...');
    } catch (err) {
      console.warn('Backend reach error. Using local defaults.', err);
    }
  };

  const commitChanges = async () => {
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ profile, experiences, projects, socials })
      });
      if (res.ok) alert('Changes pushed to Redis!');
    } catch (err) {
      console.error('Push error:', err);
    }
  };

  useEffect(() => {
    syncData();
  }, []);

  const updateProfile = (newProfile) => setProfile(prev => ({ ...prev, ...newProfile }));
  const updateExperiences = (newExp) => setExperiences(newExp);
  const updateProjects = (newProj) => setProjects(newProj);
  const updateSocials = (newSoc) => setSocials(newSoc);

  return (
    <ContentContext.Provider value={{
      profile, experiences, projects, socials,
      updateProfile, updateExperiences, updateProjects, updateSocials,
      syncData, commitChanges
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
