'use client' // Делаем компонент клиентским

import React from 'react'
import './contracts.css'
import Contract from './Contract'

const Section6: React.FC = () => {
  const handleSign = (contractNumber: number) => {
    alert(`Договор №${contractNumber} подписан`)
  }

  return (
    <section className="contracts-section">
      <div className="contracts-wrap">
        <div className="contracts-title">
          <h1>Заключение договоров и оплата</h1>
        </div>
        <div className="contracts-template">
          <div>
            <Contract contractNumber={1} onSign={() => handleSign(1)} />
          </div>
          <div>
            <Contract contractNumber={2} onSign={() => handleSign(2)} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section6
