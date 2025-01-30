'use client' // Указывает, что этот компонент является клиентским

import React, { useState, useEffect } from 'react'

interface ContractProps {
  contractNumber: number
  onSign: () => void
}

const Contract: React.FC<ContractProps> = ({ contractNumber, onSign }) => {
  const [fontSize, setFontSize] = useState(window.innerWidth <= 480 ? '16px' : '24px')

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth <= 480 ? '16px' : '24px')
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="contract-card" style={styles.contractContainer}>
      <div className="contract-title">
        <h2 style={{ ...styles.contractTitle, fontSize }}>
          {/* Динамически изменяемый размер шрифта */}
          Договор № {contractNumber}
        </h2>
      </div>

      <button id="contract-button" style={styles.signButton} onClick={onSign}>
        Подписать
      </button>
    </div>
  )
}

const styles = {
  contractContainer: {
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '294px', // Фиксированная ширина
    maxHeight: '431px',
    fontFamily: 'Sen, sans-serif',
  },
  contractTitle: {
    fontSize: '24px', // Размер заголовка по умолчанию
    fontWeight: 'bold', // Жирный текст
    marginTop: '52px',
    marginBottom: '47px', // Отступ снизу
    color: '#2d2d2d', // Темный цвет текста
    textAlign: 'center',
  },
  signButton: {
    fontSize: '27.09px',
    color: '#4a4a6b',
    backgroundColor: 'transparent',
    fontFamily: 'Sen',
    justifyContent: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    alignItem: 'center',
  },
}

const buttonStyles = `
  #contract-button {
    transition: all 0.3s ease-in-out;
  }
  
  #contract-button:hover {
    background-color: #4a4a6b;
    color: #fff;
    transform: scale(1.3);
  }

  #contract-button:active {
    transform: scale(0.95);
  }
`

// Вставляем стили в <style> в head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.type = 'text/css'
  styleSheet.innerText = buttonStyles
  document.head.appendChild(styleSheet)
}

export default Contract
