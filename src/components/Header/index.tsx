'use client'

import './header.css'
import './intro.css'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className={`header-section ${menuOpen ? 'menu-open' : ''}`}>
        <div className="logo-content">
          <div className="logo">ЛОГО</div>
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-content ${menuOpen ? 'show' : ''}`}>
          <nav className="navbar">
            <a href="#">Главное</a>
            <a href="#">Контакты</a>
            <a href="#">О нас</a>
            <a href="#">Достижения</a>
            <a href="#">Оплата и договор</a>
          </nav>
        </div>
      </div>

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
    </header>
  )
}

export default Header
