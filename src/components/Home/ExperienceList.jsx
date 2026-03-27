import { motion } from 'framer-motion';

const experienceData = [
  {
    id: '01',
    role: 'AI Engineer',
    company: 'Cognizant / Macy\'s',
    date: '2022 — Present',
    description: 'Developing high-performance digital experiences and AI-driven platforms for enterprise projects.'
  },
  {
    id: '02',
    role: 'Managing Director',
    company: 'Galaxy Traders',
    date: '2020 — Present',
    description: 'Leading digital transformation and automation for family business operations.'
  },
  {
    id: '03',
    role: 'AI Full Stack Developer',
    company: 'Independent / Freelance',
    date: '2019 — 2021',
    description: 'Building custom AI solutions and high-fidelity web applications for diverse clients.'
  }
];

const ExperienceList = () => {
  return (
    <section id="experience" className="container" style={{ paddingBottom: '12rem' }}>
      <header style={{ marginBottom: '6rem' }}>
        <h2 className="display-font" style={{ 
          fontSize: '3.5rem', 
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Experience<span style={{ color: 'var(--primary-color)' }}>.</span>
        </h2>
        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--primary-color)' }}></div>
      </header>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {experienceData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr 2fr 50px',
              padding: '3rem 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              alignItems: 'center',
              cursor: 'default',
              transition: 'background 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 255, 209, 0.02)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', fontWeight: 'bold' }}>
              {item.id}
            </span>
            <h3 className="display-font" style={{ fontSize: '1.2rem', textTransform: 'uppercase' }}>
              {item.role}
            </h3>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {item.company}
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '400px' }}>
              {item.description}
            </p>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textAlign: 'right' }}>
              {item.date}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
