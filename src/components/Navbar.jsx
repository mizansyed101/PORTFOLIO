import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem 4rem',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <Link to="/" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--text-primary)' }}>
        MIZAN<span style={{ color: 'var(--primary-color)' }}>.</span>DEV
      </Link>
      
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#about" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>About me</a>
        <a href="#projects" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Portfolio</a>
        <a href="#experience" style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Experience</a>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <button 
          onClick={toggleTheme}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            color: 'var(--text-primary)'
          }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
          Contact me
        </a>
        <Link to="/admin" style={{ fontSize: '0.7rem', opacity: 0.3, marginLeft: '1rem' }}>/admin</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;

