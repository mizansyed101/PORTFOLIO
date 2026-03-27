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
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'border-color 0.3s ease'
            }}
          >
            <div style={{ 
              width: '100%', 
              aspectRatio: '16/10', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={project.image_url} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div 
                style={{ 
                  position: 'absolute', 
                  top: 0, left: 0, width: '100%', height: '100%', 
                  background: 'linear-gradient(to bottom, transparent 40%, var(--bg-color) 100%)',
                  opacity: 0.4
                }} 
              />
            </div>
            
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                {(project.tags || []).map(tag => (
                  <span key={tag} style={{ 
                    backgroundColor: 'var(--accent-glow)',
                    color: 'var(--primary-color)',
                    padding: '0.3rem 0.8rem', 
                    fontSize: '0.7rem', 
                    borderRadius: '4px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 700 }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem' }}>
                <a 
                  href={project.demo_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Live Demo <span>↗</span>
                </a>
                <a 
                  href={project.github_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                >
                  Github <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;

