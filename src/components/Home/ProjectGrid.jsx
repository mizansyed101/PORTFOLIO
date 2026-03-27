import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';

const ProjectGrid = () => {
  const { projects } = useContent();

  return (
    <section id="projects" className="container" style={{ paddingBottom: '10rem' }}>
      <header style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <span style={{ 
          color: 'var(--primary-color)', 
          fontSize: '0.85rem', 
          fontWeight: 700, 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em',
          display: 'block',
          marginBottom: '1rem'
        }}>
          Work
        </span>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800 }}>
          Selected Projects<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="glass"
            style={{ 
              borderRadius: '24px',
              padding: '3rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'border-color 0.3s ease',
              border: '1px solid var(--border-color)'
            }}
          >
            <div>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {(typeof project.tags === 'string' ? project.tags.split(',') : (project.tags || [])).map(tag => (
                  <span key={tag} style={{ 
                    backgroundColor: 'var(--accent-glow)',
                    color: 'var(--primary-color)',
                    padding: '0.4rem 1rem', 
                    fontSize: '0.7rem', 
                    borderRadius: '6px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {tag.trim()}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.2 }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <a 
                href={project.demo_link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                LIVE DEMO <span style={{ fontSize: '1.1rem' }}>↗</span>
              </a>
              <a 
                href={project.github_link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                SOURCE <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ProjectGrid;

