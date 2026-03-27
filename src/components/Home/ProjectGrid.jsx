import { motion } from 'framer-motion';
import { useContent } from '../../context/ContentContext';

const ProjectGrid = () => {
  const { projects } = useContent();

  return (
    <section id="projects" className="container" style={{ paddingBottom: '12rem' }}>
      <header style={{ marginBottom: '6rem' }}>
        <h2 className="display-font" style={{ 
          fontSize: '3.5rem', 
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Selected Work<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--primary-color)' }}></div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            style={{ position: 'relative' }}
          >
            <div style={{ 
              width: '100%', 
              aspectRatio: '16/10', 
              backgroundColor: 'var(--surface-low)',
              border: '1px solid var(--border-color)',
              marginBottom: '2rem',
              overflow: 'hidden'
            }}>
              <img src={project.image_url} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem' }}>
              {(project.tags || []).map(tag => (
                <span key={tag} style={{ 
                  color: 'var(--primary-color)', 
                  border: '1px solid var(--border-color)', 
                  padding: '0.2rem 0.6rem', 
                  fontSize: '0.65rem', 
                  letterSpacing: '0.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'bold'
                }}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="display-font" style={{ fontSize: '1.8rem', marginBottom: '1rem', textTransform: 'uppercase' }}>
              {project.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
