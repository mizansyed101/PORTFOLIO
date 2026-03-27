const Footer = () => {
  return (
    <footer className="container" style={{ 
      padding: '6rem 0', 
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '6rem'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>
          MIZAN<span style={{ color: 'var(--primary-color)' }}>.</span>DEV
        </div>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontWeight: 500 }}>
          © 2026 Designed & Built by Mizan
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        <a href="https://github.com/mizansyed101" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>GITHUB</a>
        <a href="#" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>LINKEDIN</a>
        <a href="#" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>X / TWITTER</a>
      </div>
    </footer>
  );
};

export default Footer;

