import { useContent } from '../../context/ContentContext';

const Marquee = () => {
  const { skills } = useContent();

  // If there are no skills yet, show a placeholder or nothing
  if (!skills || skills.length === 0) return null;

  // Repeat the skills list multiple times to ensure the marquee fills the screen
  const displaySkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {displaySkills.map((tech, index) => (
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


