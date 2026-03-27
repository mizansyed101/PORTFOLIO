import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: 'Syed Mizan',
    role: 'AI Full Stack Engineer',
    summary: 'The Architect. Bridging high-level AI engineering with pixel-perfect, brutalist frontends. Based in Kolkata.'
  });

  const [experiences, setExperiences] = useState([
    {
      id: '1',
      job_title: 'AI Engineer',
      company: 'Cognizant / Macy\'s',
      date_range: '2022 — Present',
      description: 'Developing high-performance digital experiences and AI-driven platforms for enterprise projects.'
    },
    {
      id: '2',
      job_title: 'Managing Director',
      company: 'Galaxy Traders',
      date_range: '2020 — Present',
      description: 'Leading digital transformation and automation for family business operations.'
    }
  ]);

  const [projects, setProjects] = useState([
    {
      id: '1',
      title: 'GALAXY TRADERS SITE',
      description: 'Full-stack chemical supply-chain platform for specialized chemical industries.',
      tags: ['Next.js', 'Supabase', 'Tailwind'],
      image_url: 'https://via.placeholder.com/600x400/0A0A0A/00FFD1?text=GALAXY+TRADERS',
      demo_link: '#',
      github_link: 'https://github.com/mizansyed101'
    }
  ]);

  const [socials, setSocials] = useState([
    { id: '1', platform: 'Github', url: 'https://github.com/mizansyed101' },
    { id: '2', platform: 'LinkedIn', url: '#' },
    { id: '3', platform: 'Email', url: 'mailto:mizansyedwork@gmail.com' }
  ]);

  // Sync with Supabase (if credentials exist)
  const syncData = async () => {
    try {
      console.log('Syncing data with Supabase...');
    } catch (err) {
      console.error('Fetch error:', err);
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
      syncData
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
