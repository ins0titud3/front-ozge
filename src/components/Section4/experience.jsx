import './experience.css'

const Experience = ({ img, title, description }) => {
  return (
    <div className="experience">
      <img src={img} alt={title} className="experience-img" />
      <div className="exp-content">
        <h4 className="experience-title">{title}</h4>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  )
}

export default Experience
