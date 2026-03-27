import { useState } from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';

const Admin = () => {
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
      image_url: 'https://via.placeholder.com/600x400/0A0A0A/00FFD1?text=NEW+PROJECT',
      demo_link: '#',
      github_link: '#'
    };
    updateProjects([...projects, newProj]);
  };

  if (!isAuth) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="glass" style={{ padding: '3rem', width: '400px', textAlign: 'center' }}>
          <h2 className="display-font" style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>ADMIN ACCESS</h2>
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="password" 
              placeholder="Enter Credentials"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              style={{
                backgroundColor: 'var(--bg-color)',
                border: '1px solid var(--border-color)',
                padding: '1rem',
                color: 'white',
                outline: 'none',
                fontFamily: 'monospace'
              }}
            />
            <button type="submit" style={{
              backgroundColor: 'var(--primary-color)',
              color: 'var(--bg-color)',
              padding: '1rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer'
            }}>
              AUTHENTICATE
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', paddingTop: '80px' }}>
      <aside className="glass" style={{ width: '280px', padding: '2rem', height: 'calc(100vh - 80px)', position: 'fixed', zIndex: 10 }}>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Terminal</span>
          <h3 className="display-font" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>DASHBOARD_v2</h3>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {['Overview', 'About Me', 'Experience', 'Projects', 'Social Links'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textAlign: 'left',
                padding: '1rem',
                backgroundColor: activeTab === tab ? 'rgba(0, 255, 209, 0.1)' : 'transparent',
                color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-secondary)',
                border: 'none',
                borderLeft: activeTab === tab ? '2px solid var(--primary-color)' : 'none',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: activeTab === tab ? '700' : '400',
                letterSpacing: '0.05rem'
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      <main style={{ marginLeft: '280px', flex: 1, padding: '4rem' }}>
        <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="display-font" style={{ fontSize: '2.5rem' }}>{activeTab} Management</h2>
          <button style={{ padding: '0.6rem 1.5rem', backgroundColor: 'transparent', border: '1px solid #ff4444', color: '#ff4444', fontSize: '0.7rem' }} onClick={() => setIsAuth(false)}>LOGOUT</button>
        </header>

        <section className="glass" style={{ padding: '3rem' }}>
          {activeTab === 'Overview' && (
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>System Status: <span style={{ color: 'var(--primary-color)' }}>ACTIVE</span></p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>EXPERIENCE COUNT</span>
                  <p style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>{experiences.length}</p>
                </div>
                <div className="glass" style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>PROJECTS DEPLOYED</span>
                  <p style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>{projects.length}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'About Me' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>FULL NAME</label>
                <input name="name" value={profile.name} onChange={handleProfileChange} style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '1rem', color: 'white' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>OFFICIAL ROLE</label>
                <input name="role" value={profile.role} onChange={handleProfileChange} style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '1rem', color: 'white' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.7rem', color: 'var(--primary-color)' }}>PROFESSIONAL SUMMARY</label>
                <textarea name="summary" value={profile.summary} onChange={handleProfileChange} rows="4" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '1rem', color: 'white', resize: 'vertical' }} />
              </div>
            </div>
          )}

          {activeTab === 'Experience' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {experiences.map((exp) => (
                <div key={exp.id} className="glass" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input value={exp.job_title} onChange={(e) => handleExperienceChange(exp.id, 'job_title', e.target.value)} placeholder="Role" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <input value={exp.company} onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)} placeholder="Company" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <input value={exp.date_range} onChange={(e) => handleExperienceChange(exp.id, 'date_range', e.target.value)} placeholder="Date Range" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <textarea value={exp.description} onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)} rows="3" placeholder="Description" style={{ gridColumn: 'span 2', backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                </div>
              ))}
              <button onClick={addExperience} style={{ padding: '1rem', border: '1px dashed var(--primary-color)', color: 'var(--primary-color)', backgroundColor: 'transparent', cursor: 'pointer' }}>+ ADD EXPERIENCE</button>
            </div>
          )}

          {activeTab === 'Projects' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {projects.map((proj) => (
                <div key={proj.id} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input value={proj.title} onChange={(e) => handleProjectChange(proj.id, 'title', e.target.value)} placeholder="Project Title" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <textarea value={proj.description} onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)} rows="2" placeholder="Description" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <input value={proj.image_url} onChange={(e) => handleProjectChange(proj.id, 'image_url', e.target.value)} placeholder="Image URL" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input value={proj.demo_link} onChange={(e) => handleProjectChange(proj.id, 'demo_link', e.target.value)} placeholder="Live Link" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                    <input value={proj.github_link} onChange={(e) => handleProjectChange(proj.id, 'github_link', e.target.value)} placeholder="GitHub Link" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  </div>
                </div>
              ))}
              <button onClick={addProject} style={{ padding: '1rem', border: '1px dashed var(--primary-color)', color: 'var(--primary-color)', backgroundColor: 'transparent', cursor: 'pointer' }}>+ ADD PROJECT</button>
            </div>
          )}

          {activeTab === 'Social Links' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {socials.map((soc) => (
                <div key={soc.id} className="glass" style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                  <input value={soc.platform} onChange={(e) => handleSocialChange(soc.id, 'platform', e.target.value)} placeholder="Platform" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                  <input value={soc.url} onChange={(e) => handleSocialChange(soc.id, 'url', e.target.value)} placeholder="URL" style={{ backgroundColor: '#000', border: '1px solid var(--border-color)', padding: '0.8rem', color: 'white' }} />
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <motion.div initial={{ y: 100 }} animate={{ y: 0 }} style={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'var(--primary-color)', color: 'var(--bg-color)', padding: '1rem 2rem', fontWeight: '900', display: 'flex', gap: '2rem', boxShadow: '0 10px 30px rgba(0,255,209,0.3)', zIndex: 100 }}>
        <span>LOCAL CACHE SYNCED</span>
        <button 
          onClick={commitChanges}
          style={{ backgroundColor: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontWeight: '900', fontSize: '0.8rem' }}
        >
          MANUAL PUSH
        </button>
      </motion.div>
    </div>
  );
};

export default Admin;
