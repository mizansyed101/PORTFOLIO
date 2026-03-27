import Hero from '../components/Home/Hero';
import ExperienceList from '../components/Home/ExperienceList';
import ProjectGrid from '../components/Home/ProjectGrid';
import Marquee from '../components/Home/Marquee';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Marquee />
      <ExperienceList />
      <ProjectGrid />
      
      {/* Contact Section */}
      <section id="contact" className="container" style={{ textAlign: 'center', paddingBottom: '16rem' }}>
        <h2 className="display-font" style={{ fontSize: '4.5rem', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Let's Build<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.2rem' }}>
          Seeking high-performance collaboration? Reach out.
        </p>
        <a 
          href="mailto:mizansyedwork@gmail.com" 
          style={{ 
            fontSize: '2rem', 
            color: 'var(--primary-color)', 
            fontWeight: '600',
            textDecoration: 'underline',
            textUnderlineOffset: '10px'
          }}
        >
          mizansyedwork@gmail.com
        </a>
      </section>
    </motion.main>
  );
};

export default Home;
