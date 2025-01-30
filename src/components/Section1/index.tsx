import './style.css'
import Card from './card'
const Section1 = () => {
  const cardsData = [
    {
      title: '01',
      subtitle: 'Гибкость и удобство',
      description:
        'Онлайн-курсы позволяют учиться в удобное время и в любом месте. Вы можете совмещать обучение с работой.',
      color: 'rgba(80, 255, 92, 1)',
    },
    {
      title: '02',
      subtitle: 'Доступность и разнообразие',
      description:
        'Большой выбор курсов на любые темы — от программирования до искусства. Кроме того, онлайн-курсы обычно дешевле.',
      color: 'rgba(130, 108, 255, 1)',
    },
    {
      title: '03',
      subtitle: 'Современные технологии',
      description:
        'Вы можете выбрать курсы, которые соответствуют вашим целям и уровню подготовки. Многие платформы используют интерактивные методы.',
      color: 'rgba(237, 136, 255, 1)',
    },
  ]

  return (
    <section className="advantages">
      <div className="advantages-content">
        <div className="advantages-header">
          <h1>Наши преимущества</h1>
        </div>
        <div className="advantages-desc">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Section1
