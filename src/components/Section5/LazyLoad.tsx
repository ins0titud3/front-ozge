import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css' // Не забудьте подключить стили Slick
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '',
        right: '75px', // Отступ от rating-content справа
        zIndex: 2, // Устанавливаем z-index, чтобы стрелка была поверх контента
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: '',
        left: '75px', // Отступ от rating-content слева
        zIndex: 2, // Устанавливаем z-index, чтобы стрелка была поверх контента
      }}
      onClick={onClick}
    />
  )
}
function SimpleSlider() {
  const settings = {
    dots: false, // Включает точки навигации (опционально)
    infinite: false, // Отключаем бесконечный цикл
    speed: 500,
    slidesToShow: 1, // Показывает один слайд
    slidesToScroll: 1, // Скроллит по одному слайду
    adaptiveHeight: true, // Адаптирует высоту к содержимому
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <section className="rating-section">
          <div className="rating-wrap">
            <div className="rating-content">
              <div className="rating-img">
                <img src="/images/Mask Group (1).png" alt="" />
              </div>
              <div className="rating-text">
                <h1>Что думают наши ученики про нас?</h1>
                <div className="rating-avatar">
                  <img src="/images/Mask Group (2).png" alt="" id="avatar" />
                  <div className="avatar-text">
                    <h4>Alpanasap</h4>
                    <p>Japung, Indonesia</p>
                  </div>
                </div>
                <div className="rating-desc">
                  <p>
                    Very satisfying service makes it comfortable, a beautiful place in the world.{' '}
                  </p>
                  <div className="stars">
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rating-section">
          <div className="rating-wrap">
            <div className="rating-content">
              <div className="rating-img">
                <img src="/images/Mask Group (1).png" alt="" />
              </div>
              <div className="rating-text">
                <h1>Что думают наши ученики про нас?</h1>
                <div className="rating-avatar">
                  <img src="/images/Mask Group (2).png" alt="" id="avatar" />
                  <div className="avatar-text">
                    <h4>Второй пользователь</h4>
                    <p>Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="rating-desc">
                  <p>
                    Very satisfying service makes it comfortable, a beautiful place in the world.{' '}
                  </p>
                  <div className="stars">
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rating-section">
          <div className="rating-wrap">
            <div className="rating-content">
              <div className="rating-img">
                <img src="/images/Mask Group (1).png" alt="" />
              </div>
              <div className="rating-text">
                <h1>Что думают наши ученики про нас?</h1>
                <div className="rating-avatar">
                  <img src="/images/Mask Group (2).png" alt="" id="avatar" />
                  <div className="avatar-text">
                    <h4>Третий пользователь</h4>
                    <p>Bali, Indonesia</p>
                  </div>
                </div>
                <div className="rating-desc">
                  <p>
                    Very satisfying service makes it comfortable, a beautiful place in the world.{' '}
                  </p>
                  <div className="stars">
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                    <img src="/images/Star 1.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  )
}

export default SimpleSlider
