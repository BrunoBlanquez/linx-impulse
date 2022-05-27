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
        <a href="#"><button className='botaoHeader'>Conheça a Linx</button></a>
        <a href="#algoritmo"><button className='botaoHeader'>Ajude o algorítmo</button></a>
        <a href="#itens"><button className='botaoHeader'>Seus produtos</button></a>
       <a href="#compartilhe"><button className='botaoHeader'>Compartilhe</button></a>
      </div>
    </div>
  )
}