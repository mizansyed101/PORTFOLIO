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
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'window.innerWidth > 768 ? "1.2fr 0.8fr" : "1fr"',
        alignItems: 'center',
        gap: '4rem',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mobile-center"
        >
          <div className="tech-brackets" style={{ justifyContent: 'inherit' }}>
            {skills.join(' / ')}
          </div>

          <h1 style={{ 
            marginBottom: '2rem',
            maxWidth: '800px'
          }}>
            I build scalable <span style={{ color: 'var(--primary-color)' }}>AI-driven</span> experiences<span style={{ color: 'var(--primary-color)' }}>.</span>
          </h1>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '520px', 
            lineHeight: '1.6',
            marginBottom: '3.5rem',
            fontWeight: 400
          }}>
            {profile.summary}
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }} className="mobile-center">
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
          className="hero-image-container"
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
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxWidth: '700px',
              display: 'block',
              margin: '0 auto',
              transform: 'perspective(1000px) rotateY(-5deg)' 
            }} 
          />
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-image-container {
            order: -1;
            margin-bottom: 2rem;
          }
          .tech-brackets {
            justify-content: center;
          }
          .mobile-center {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;


