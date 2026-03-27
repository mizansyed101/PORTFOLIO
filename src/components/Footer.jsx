const Footer = () => {
  return (
    <footer className="container" style={{ 
      padding: '4rem 0', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '8rem'
    }}>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
        © 2026 MIZAN.exe — PRO_AGENT_PORTFOLIO_v2
      </div>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="https://github.com/mizansyed101" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', hover: { color: 'var(--primary-color)' } }}>GITHUB</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>LINKEDIN</a>
        <a href="#" style={{ color: 'var(--text-secondary)' }}>TWITTER / X</a>
      </div>
    </footer>
  );
};

export default Footer;
