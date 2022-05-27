import React from 'react'
import "./card.css"

export default function Card({dados}) {
  return (
    <div className='divPrincCard'>
      <div className="cardImg">
        <div className="divImg"><img src={dados.image} alt="" /></div>
      </div>
      <div className="cardInfos">
        <div className='nomeProduto'>{dados.name}</div>
        <div className="descProduto">{dados.description}</div>
        <div className='precoAntigo'>De R$ {dados.oldPrice}</div>
        <div className="precoAtual">Por: R$ {dados.price}</div>
        <div className="parcelas">ou {dados.installments.count}x de R${dados.installments.value}</div>
        <button className="comprar">Comprar</button>
      </div>
    </div>
  )
}
