import './style.css'
import Achievements from './achievements'

const Section3 = () => {
  const achievementsData = [
    {
      img: '/images/Vector.svg',
      title: 'Успешно реализованные проекты',
      description:
        'Мы помогли более клиентам достичь их целей, предоставляя качественные услуги и инновационные решения',
    },
    {
      img: '/images/Group 20.svg',
      title: 'Широкая география',
      description:
        'Сегодня наши услуги востребованы в странах, что подтверждает нашу способность работать на международном уровне.',
    },
    {
      img: '/images/Group 62.svg',
      title: 'Награды и признание',
      description:
        'Компания неоднократно получала награды и премии за вклад в [ваша отрасль], что подтверждает нашу экспертизу и профессионализм.',
    },
    {
      img: '/images/Group 63.svg',
      title: 'Команда профессионалов',
      description:
        'В нашей команде работают [цифра] специалистов, каждый из которых вносит свой вклад в развитие компании.',
    },
  ]

  return (
    <section className="Progress-section">
      <div className="progress-wrap">
        <div className="progress-title">
          <h1>Достижения</h1>
          <p>
            Мы гордимся тем, что за годы работы смогли добиться значительных успехов и завоевать
            доверие наших клиентов.
          </p>
        </div>
        <div className="progress-cards">
          {achievementsData.map((achievements, index) => (
            <Achievements
              key={index}
              img={achievements.img}
              title={achievements.title}
              description={achievements.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section3
