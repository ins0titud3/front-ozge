import './style.css'
import './card.css'
const Card = ({ title, subtitle, description, color }) => {
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h2 className="card-subtitle" style={{ color: color }}>
        {subtitle}
      </h2>
      <p className="card-description">{description}</p>
    </div>
  )
}
export default Card
