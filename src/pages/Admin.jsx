import { useState } from 'react';
import { motion } from 'framer-motion';

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Overview');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'mizan101') { // Simple password for now as per previous conv logic
      setIsAuth(true);
    } else {
      alert('Unauthorized access.');
    }
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
      {/* Side Nav */}
      <aside className="glass" style={{ width: '280px', padding: '2rem', height: 'calc(100vh - 80px)', position: 'fixed' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Terminal</span>
          <h3 className="display-font" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>DASHBOARD_v2</h3>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Overview', 'About Me', 'Experience', 'Projects', 'Social Links'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                textAlign: 'left',
                padding: '0.8rem 1rem',
                backgroundColor: activeTab === tab ? 'rgba(0, 255, 209, 0.1)' : 'transparent',
                color: activeTab === tab ? 'var(--primary-color)' : 'var(--text-secondary)',
                border: 'none',
                borderLeft: activeTab === tab ? '2px solid var(--primary-color)' : 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: activeTab === tab ? 'bold' : 'normal'
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ marginLeft: '280px', flex: 1, padding: '4rem' }}>
        <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="display-font" style={{ fontSize: '2.5rem' }}>{activeTab} Management</h2>
          <button style={{ 
            padding: '0.6rem 1.5rem', 
            backgroundColor: 'transparent', 
            border: '1px solid #ff4444', 
            color: '#ff4444',
            fontSize: '0.8rem'
          }} onClick={() => setIsAuth(false)}>LOGOUT</button>
        </header>

        <section className="glass" style={{ padding: '3rem' }}>
          {activeTab === 'Overview' && (
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Welcome, Mizan. Current system status: ONLINE.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="glass" style={{ padding: '2rem', borderOpacity: 0.1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>LAST SITE DEPLOYMENT</span>
                  <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>{new Date().toLocaleDateString()}</p>
                </div>
                <div className="glass" style={{ padding: '2rem', borderOpacity: 0.1 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>DATABASE STATUS</span>
                  <p style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>SUPABASE_CONNECTED</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Placeholder for actual editor logic */}
          {activeTab !== 'Overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)' }}>This section is ready for dynamic forms connected to Supabase.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--primary-color)' }}>FIELD NAME</label>
                <input 
                  type="text" 
                  placeholder="Enter value..."
                  style={{
                    backgroundColor: 'var(--bg-color)',
                    border: '1px solid var(--border-color)',
                    padding: '1rem',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>
              <button style={{
                alignSelf: 'flex-start',
                backgroundColor: 'var(--primary-color)',
                color: 'var(--bg-color)',
                padding: '0.8rem 2.5rem',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer'
              }}>
                SAVE CHANGES
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Save Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: 'var(--primary-color)',
          color: 'var(--bg-color)',
          padding: '1rem 2rem',
          fontWeight: 'bold',
          display: 'flex',
          gap: '2rem',
          boxShadow: '0 0 20px var(--accent-glow)'
        }}
      >
        <span>CHANGES DETECTED</span>
        <button style={{ backgroundColor: 'transparent', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}>COMMIT</button>
      </motion.div>
    </div>
  );
};

export default Admin;
