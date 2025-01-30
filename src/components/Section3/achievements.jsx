import './style.css'
import './achievements.css'

const Achievements = ({ img, title, description }) => {
  return (
    <div className="achievements">
      <img src={img} alt={title} className="achievements-img" />
      <h4 className="achievements-title">{title}</h4>
      <p className="achievements-description">{description}</p>
    </div>
  )
}

export default Achievements
