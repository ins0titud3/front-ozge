import React from 'react'
import './intro.css'

const Intro = () => {
  return (
    <section className="intro-section">
      <div className="intro-wrap">
        <div className="intro-img">
          <img src="/images/intro.png" alt="" />
        </div>
        <div className="intro-text">
          <h1>Курсы, которые меняют будущее</h1>
          <p>
            Освойте востребованные навыки с нашими современными курсами! Мы предлагаем обучение для
            начинающих и профессионалов в удобном формате — онлайн и офлайн.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Intro
