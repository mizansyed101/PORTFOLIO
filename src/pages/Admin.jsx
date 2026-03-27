import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../context/ContentContext';

const Admin = ({ theme }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');
  const { profile, experiences, projects, socials, updateProfile, updateExperiences, updateProjects, updateSocials, commitChanges } = useContent();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mizan101') {
      setIsAuth(true);
    } else {
      alert('Unauthorized access.');
    }
  };

  const handleProfileChange = (e) => {
    updateProfile({ [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (id, field, value) => {
    const updated = experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp);
    updateExperiences(updated);
  };

  const handleProjectChange = (id, field, value) => {
    const updated = projects.map(proj => proj.id === id ? { ...proj, [field]: value } : proj);
    updateProjects(updated);
  };

  const handleSocialChange = (id, field, value) => {
    const updated = socials.map(soc => soc.id === id ? { ...soc, [field]: value } : soc);
    updateSocials(updated);
  };

  const addExperience = () => {
    const newExp = {
      id: Math.random().toString(36).substr(2, 9),
      job_title: 'New Position',
      company: 'Company Name',
      date_range: '2024 — Present',
      description: 'Describe your role...'
    };
    updateExperiences([...experiences, newExp]);
  };

  const addProject = () => {
    const newProj = {
      id: Math.random().toString(36).substr(2, 9),
      title: 'New Project',
      description: 'Project description...',
      tags: ['React', 'JavaScript'],
      image_url: 'https://via.placeholder.com/600x400/0A0A0A/00A3FF?text=NEW+PROJECT',
      demo_link: '#',
      github_link: '#'
    };
    updateProjects([...projects, newProj]);
  };

  if (!isAuth) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass" 
          style={{ padding: '4rem', width: '450px', textAlign: 'center', borderRadius: '24px' }}
        >
          <div style={{ color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.4em', marginBottom: '1rem', textTransform: 'uppercase' }}>Secure Gateway</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>ADMIN PANEL</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="password" 
              placeholder="System Access Key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: 'var(--surface-low)',
                border: '1px solid var(--border-color)',
                padding: '1.25rem',
                color: 'var(--text-primary)',
                outline: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                textAlign: 'center'
              }}
            />
            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.25rem' }}>
              AUTHENTICATE
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  const navItems = [
    { id: 'Overview', icon: '📊' },
    { id: 'About Me', icon: '👤' },
    { id: 'Experience', icon: '💼' },
    { id: 'Projects', icon: '🚀' },
    { id: 'Social Links', icon: '🌐' }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-primary)' }}>
      {/* Sidebar */}
      <aside className="glass" style={{ width: '300px', padding: '2.5rem', height: '100vh', position: 'fixed', left: 0, top: 0, zIndex: 10, display: 'flex', flexDirection: 'column', borderRadius: '0 32px 32px 0' }}>
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>MIZAN<span style={{ color: 'var(--primary-color)' }}>.</span>CMS</h3>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>v3.0.1 PRO</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                textAlign: 'left',
                padding: '1rem 1.5rem',
                backgroundColor: activeTab === item.id ? 'var(--accent-glow)' : 'transparent',
                color: activeTab === item.id ? 'var(--primary-color)' : 'var(--text-secondary)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: activeTab === item.id ? '700' : '500',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              {item.id}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setIsAuth(false)}
          style={{ padding: '1rem', background: 'transparent', border: '1px solid #ff4444', color: '#ff4444', borderRadius: '12px', cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem' }}
        >
          LOGOUT SESSION
        </button>
      </aside>

      {/* Content */}
      <main style={{ marginLeft: '300px', flex: 1, padding: '4rem 6rem' }}>
        <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <span style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Management Path</span>
            <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>{activeTab}</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>System Status: <span style={{ color: '#2ecc71', fontWeight: 700 }}>● ONLINE</span></p>
        </header>

        <section style={{ maxWidth: '1000px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'Overview' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div className="card" style={{ padding: '2.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Experience Blocks</span>
                    <p style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--primary-color)', margin: '1rem 0' }}>{experiences.length}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>All industry records parsed</p>
                  </div>
                  <div className="card" style={{ padding: '2.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>Production Projects</span>
                    <p style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--primary-color)', margin: '1rem 0' }}>{projects.length}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Live on digital grid</p>
                  </div>
                </div>
              )}

              {activeTab === 'About Me' && (
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-color)' }}>IDENTITY NAME</label>
                    <input name="name" value={profile.name} onChange={handleProfileChange} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1.25rem', color: 'var(--text-primary)', borderRadius: '12px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-color)' }}>PRIMARY DIRECTIVE (ROLE)</label>
                    <input name="role" value={profile.role} onChange={handleProfileChange} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1.25rem', color: 'var(--text-primary)', borderRadius: '12px' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-color)' }}>MISSION STATEMENT (SUMMARY)</label>
                    <textarea name="summary" value={profile.summary} onChange={handleProfileChange} rows="5" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1.25rem', color: 'var(--text-primary)', borderRadius: '12px', resize: 'vertical', lineHeight: '1.6' }} />
                  </div>
                </div>
              )}

              {activeTab === 'Experience' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {experiences.map((exp) => (
                    <div key={exp.id} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-secondary)' }}>ROLE</label>
                        <input value={exp.job_title} onChange={(e) => handleExperienceChange(exp.id, 'job_title', e.target.value)} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-secondary)' }}>COMPANY</label>
                        <input value={exp.company} onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-secondary)' }}>TIMELINE</label>
                        <input value={exp.date_range} onChange={(e) => handleExperienceChange(exp.id, 'date_range', e.target.value)} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                        <label style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-secondary)' }}>DESCRIPTION</label>
                        <textarea value={exp.description} onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)} rows="3" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px', resize: 'vertical' }} />
                      </div>
                    </div>
                  ))}
                  <button onClick={addExperience} style={{ padding: '1.5rem', border: '1px dashed var(--primary-color)', color: 'var(--primary-color)', backgroundColor: 'var(--accent-glow)', borderRadius: '16px', cursor: 'pointer', fontWeight: 700 }}>+ INITIALIZE NEW EXPERIENCE BLOCK</button>
                </div>
              )}

              {activeTab === 'Projects' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {projects.map((proj) => (
                    <div key={proj.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <input value={proj.title} onChange={(e) => handleProjectChange(proj.id, 'title', e.target.value)} placeholder="Project Title" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 700 }} />
                      <textarea value={proj.description} onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)} rows="2" placeholder="Brief Description" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      <input value={proj.image_url} onChange={(e) => handleProjectChange(proj.id, 'image_url', e.target.value)} placeholder="High-Res Image URL" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label style={{ fontSize: '0.6rem', fontWeight: 800 }}>LIVE DEPLOYMENT</label>
                          <input value={proj.demo_link} onChange={(e) => handleProjectChange(proj.id, 'demo_link', e.target.value)} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <label style={{ fontSize: '0.6rem', fontWeight: 800 }}>SOURCE GRID (GITHUB)</label>
                          <input value={proj.github_link} onChange={(e) => handleProjectChange(proj.id, 'github_link', e.target.value)} style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <button onClick={addProject} style={{ padding: '1.5rem', border: '1px dashed var(--primary-color)', color: 'var(--primary-color)', backgroundColor: 'var(--accent-glow)', borderRadius: '16px', cursor: 'pointer', fontWeight: 700 }}>+ DEPLOY NEW PROJECT MODULE</button>
                </div>
              )}

              {activeTab === 'Social Links' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {socials.map((soc) => (
                    <div key={soc.id} className="card" style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) 2fr', gap: '1.5rem' }}>
                      <input value={soc.platform} onChange={(e) => handleSocialChange(soc.id, 'platform', e.target.value)} placeholder="Node" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                      <input value={soc.url} onChange={(e) => handleSocialChange(soc.id, 'url', e.target.value)} placeholder="Target URL" style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)', padding: '1rem', color: 'var(--text-primary)', borderRadius: '8px' }} />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <motion.div 
        initial={{ y: 100 }} 
        animate={{ y: 0 }} 
        style={{ 
          position: 'fixed', 
          bottom: 40, 
          right: 40, 
          backgroundColor: 'var(--primary-color)', 
          color: 'white', 
          padding: '1.25rem 2.5rem', 
          fontWeight: '900', 
          display: 'flex', 
          alignItems: 'center',
          gap: '2.5rem', 
          borderRadius: '20px',
          boxShadow: '0 20px 50px var(--accent-glow)', 
          zIndex: 100 
        }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>BACKEND SYNC: READY</span>
        <button 
          onClick={commitChanges}
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.2)', 
            border: 'none', 
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer', 
            fontWeight: '900', 
            fontSize: '0.75rem' 
          }}
        >
          PUSH CHANGES
        </button>
      </motion.div>
    </div>
  );
};

export default Admin;

