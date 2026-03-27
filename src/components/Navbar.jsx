import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About me', href: '#about' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

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
        padding: '1rem clamp(1.5rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--border-color)'
      }}
    >
      <Link 
        to="/" 
        onClick={() => setIsMenuOpen(false)}
        style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.05em', color: 'var(--text-primary)', zIndex: 101 }}
      >
        MIZAN<span style={{ color: 'var(--primary-color)' }}>.</span>DEV
      </Link>
      
      {/* Desktop Links */}
      <div className="desktop-only" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
            {link.name}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', zIndex: 101 }}>
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

        <a href="#contact" className="btn-primary desktop-only" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
          Contact me
        </a>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            padding: '5px'
          }}
          className="mobile-toggle"
        >
          <motion.div animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }} style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px' }} />
          <motion.div animate={{ opacity: isMenuOpen ? 0 : 1 }} style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px' }} />
          <motion.div animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }} style={{ width: '24px', height: '2px', backgroundColor: 'var(--text-primary)', borderRadius: '2px' }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="glass"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              zIndex: 100
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}
              >
                {link.name}
              </motion.a>
            ))}
            <Link 
              to="/admin" 
              onClick={() => setIsMenuOpen(false)}
              style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '2rem' }}
            >
              /ADMIN_PORTAL
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>

  );
};

export default Navbar;

