import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="container" style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="display-font" style={{ 
          color: 'var(--primary-color)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2rem',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          AI Full Stack Engineer
        </span>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 10vw, 7rem)', 
          lineHeight: '1', 
          marginTop: '1rem',
          marginBottom: '2rem'
        }}>
          Hi, I'm Syed Mizan<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h1>
        <p style={{ 
          color: 'var(--text-secondary)', 
          maxWidth: '600px', 
          fontSize: '1.2rem',
          fontWeight: '300'
        }}>
          The Architect. Bridging high-level AI engineering with pixel-perfect, brutalist frontends. Based in Kolkata.
        </p>
      </motion.div>

      {/* Floating Icon */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{
          position: 'absolute',
          right: '5%',
          top: '30%',
          fontSize: '12rem',
          color: 'var(--primary-color)',
          opacity: 0.1,
          fontFamily: 'monospace',
          filter: 'blur(2px)'
        }}
      >
        &lt; /&gt;
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ marginTop: '4rem' }}
      >
        <a href="#projects" className="glass" style={{
          padding: '1rem 2rem',
          color: 'var(--primary-color)',
          borderColor: 'var(--primary-color)',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem'
        }}>
          View Projects
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
