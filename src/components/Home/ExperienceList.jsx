import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';

const ExperienceList = () => {
  const { experiences } = useContent();

  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="container" style={{ paddingBottom: '10rem' }}>
      <header style={{ marginBottom: '5rem' }} className="mobile-center">
        <span style={{ 
          color: 'var(--primary-color)', 
          fontSize: '0.85rem', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em',
          display: 'block',
          marginBottom: '1rem'
        }}>
          Timeline
        </span>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
          Experience<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{
              padding: 'clamp(1.5rem, 5vw, 3rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{exp.job_title}</h3>
                <p style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '1.1rem' }}>{exp.company}</p>
              </div>
              <span style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                backgroundColor: 'var(--surface-high)',
                padding: '0.4rem 1rem',
                borderRadius: '100px',
                border: '1px solid var(--border-color)'
              }}>
                {exp.date_range}
              </span>
            </div>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.05rem', 
              lineHeight: '1.8', 
              marginTop: '1rem',
              maxWidth: '800px'
            }}>
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
