import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';
import heroImg from '../../assets/hero_refined.png';

const Hero = () => {
  const { profile, skills } = useContent();

  return (
    <section 
      id="about" 
      className="container" 
      style={{ 
        minHeight: '100vh', 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
        alignItems: 'center',
        gap: '4rem',
        paddingTop: '100px',
        paddingBottom: '120px'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="tech-brackets">
          {skills.join(' / ')}
        </div>

        
        <h1 style={{ 
          fontSize: 'clamp(3.5rem, 8vw, 6rem)', 
          fontWeight: 800,
          marginBottom: '2rem',
          maxWidth: '800px'
        }}>
          I build scalable <span style={{ color: 'var(--primary-color)' }}>AI-driven</span> experiences<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h1>
        
        <p style={{ 
          color: 'var(--text-secondary)', 
          maxWidth: '520px', 
          fontSize: '1.25rem',
          lineHeight: '1.6',
          marginBottom: '3.5rem',
          fontWeight: 400
        }}>
          {profile.summary}
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#projects" className="btn-primary">
            See my dev work
          </a>
          <a href="/cv.pdf" className="btn-secondary">
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        style={{ width: '100%', position: 'relative' }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)',
            top: 0,
            left: 0,
            zIndex: -1,
            filter: 'blur(40px)'
          }}
        />
        <img 
          src={heroImg} 
          alt="Technical Architecture High-end Laptop Mockup" 
          style={{ width: '130%', height: 'auto', marginLeft: '-15%', transform: 'perspective(1000px) rotateY(-5deg)' }} 
        />
      </motion.div>
    </section>
  );
};

export default Hero;

