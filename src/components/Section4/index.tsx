import './style.css'
import Experience from './experience'

const Section4 = () => {
  const experienceData = [
    {
      img: '/images/Rectangle 41.png',
      title: 'Restaurant Website Design',
      description:
        'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.',
    },
    {
      img: '/images/Rectangle 41 (1).png',
      title: 'Restaurant Website Design',
      description:
        'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.',
    },
    {
      img: '/images/Rectangle 41 (2).png',
      title: 'Restaurant Website Design',
      description:
        'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.',
    },
    {
      img: '/images/Rectangle 41 (3).png',
      title: 'Restaurant Website Design',
      description:
        'I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.',
    },
  ]

  // Разделяем массив на две группы
  const column1Data = experienceData.slice(0, 2) // Первые две карточки
  const column2Data = experienceData.slice(2) // Последние две карточки

  return (
    <section className="exp-section">
      <div className="exp-wrap">
        <div className="exp-column1">
          <div className="exp1-title">
            <h1>Что мы проделали за 8 лет работы?</h1>
          </div>
          <div className="exp-card">
            {column1Data.map((experience, index) => (
              <Experience
                key={index}
                img={experience.img}
                title={experience.title}
                description={experience.description}
              />
            ))}
          </div>
        </div>

        <div className="exp-column2">
          <div className="exp-card">
            {column2Data.map((experience, index) => (
              <Experience
                key={index}
                img={experience.img}
                title={experience.title}
                description={experience.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4
