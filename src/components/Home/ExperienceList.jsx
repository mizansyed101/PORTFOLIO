import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';

const ExperienceList = () => {
  const { experiences } = useContent();

  return (
    <section id="experience" className="container" style={{ paddingBottom: '10rem' }}>
      <header style={{ marginBottom: '5rem' }}>
        <span style={{ 
          color: 'var(--primary-color)', 
          fontSize: '0.85rem', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em',
          display: 'block',
          marginBottom: '1rem'
        }}>
          Career
        </span>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
          Work History<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(150px, 1fr) 2fr 3fr',
              padding: '2.5rem 0',
              borderBottom: '1px solid var(--border-color)',
              alignItems: 'start',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem', 
              fontWeight: 500,
              fontFamily: 'monospace'
            }}>
              {item.date_range}
            </span>
            
            <div style={{ paddingRight: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                {item.job_title}
              </h3>
              <span style={{ 
                color: 'var(--primary-color)', 
                fontSize: '0.9rem', 
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {item.company}
              </span>
            </div>

            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem', 
              lineHeight: '1.7',
              maxWidth: '600px'
            }}>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;

