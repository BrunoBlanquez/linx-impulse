import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import "./itens.css"
import axios from 'axios'

export default function Itens() {
  const [dados, setDados] = useState([])
  let [pag, setPag] = useState(1)

  useEffect( () => {
   const buscaAPI = axios.get(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${pag}`)
      .then(resposta => {
        setDados(resposta.data.products)
      })
      .catch(error => {
        console.log(error)
      })
  }, [pag])

  const mudaPagina = () => {
    setPag(pag++)
    console.log(pag)
  } 

  return (
    <div className='divPrincipalItens' id="itens">
      <div className="divisaoSuperior">
        <div className='divisao'></div>
        <div className="titulo">Sua Seleção Especial</div>
        <div className='divisao'></div>
      </div>
      <div className='itens'>
          {dados.map((dados) => (
            <div key={dados.id} className="card">
              <Card dados={dados} />
            </div>
          ))}
      </div>
      <button className='botaoBuscaItens' onClick={mudaPagina}>Ainda mais produtos aqui!</button>
    </div>
  )
}
