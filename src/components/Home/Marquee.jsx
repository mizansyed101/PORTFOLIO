const technologies = [
  'React', 'Node.js', 'Python', 'Supabase', 'Tailwind', 'Next.js', 'Framer Motion', 'Vercel', 'PostgreSQL', 'Docker'
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Double the list to create a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <span key={index} className="marquee-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
