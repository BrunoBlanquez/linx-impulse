import React from 'react'
import "./compartilhar.css"

export default function Compartilhar() {
  return (
    <div className='divCompart'>
      <div className="divisaoSuperior">
        <div className='divisao'></div>
        <div className="titulo">Compartilhe a novidade</div>
        <div className='divisao'></div>
      </div>
      <div>
        <p className='textoCompart'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      </div>
      <div className='divForm'>
        <form className='formGeral'>
          <div className='divItens'>
            <label>Nome do seu amigo:</label>
            <input type="text" />
          </div>
          <div className='divItens'>
            <label>E-mail:</label>
            <input type="email" />
          </div>
        </form>
          <button className='formBtn'>Enviar agora</button>
      </div>
    </div>
  )
}
