import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='divMain'>
      <div className="divTitulo">
        <h2>uma seleção de produtos</h2>
        <h1>especial para você</h1>
        <h5>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</h5>
      </div>
      <div className='divBtn'>
        <button className='botaoHeader'>Conheça a Linx</button>
        <button className='botaoHeader'>Ajude o algorítmo</button>
        <button className='botaoHeader'>Seus produtos</button>
        <button className='botaoHeader'>Compartilhe</button>
      </div>
    </div>
  )
}