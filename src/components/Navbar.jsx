import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass fixed top-0 w-full z-50 py-4 px-8 flex justify-between items-center"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 4rem'
      }}
    >
      <Link to="/" className="display-font text-2xl font-bold tracking-tighter" style={{ color: 'var(--primary-color)' }}>
        MIZAN.exe
      </Link>
      
      <div style={{ display: 'flex', gap: '3rem' }}>
        <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
        <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
        <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        <Link to="/admin" className="text-xs opacity-50 hover:opacity-100 transition-opacity">/admin</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
