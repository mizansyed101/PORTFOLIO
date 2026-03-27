const technologies = [
  'React', 'Node.js', 'Python', 'Supabase', 'Tailwind', 'Next.js', 'Framer Motion', 'Vercel', 'PostgreSQL', 'Docker',
  'Git', 'AWS', 'Firebase', 'Redux', 'TypeScript'
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...technologies, ...technologies].map((tech, index) => (
          <span key={index} className="marquee-item">
            {tech}
          </span>
        ))}
        {/* Additional padding-right for CSS gap compatibility */}
        <div style={{ paddingRight: '4rem' }} />
      </div>
    </div>
  );
};

export default Marquee;

