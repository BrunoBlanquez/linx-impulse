import React from 'react'
import "./contato.css"

export default function Contato() {
  return (
    <div className='divMainContato'>
      <div className='contatoTextos'>
        <h3>Ajude o algorítmo a ser mais certeiro</h3>
        <div className='divTexto'>
          <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.</p>
          <p className="texto">Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
        </div>
      </div>
      <div className='contatoForm'>
        <form>
          <div className='contatoItem'>
            <label>Seu nome</label>
            <input type="text" />
          </div>
          <div className="contatoItem">
            <label>E-mail</label>
            <input type="email" />
          </div>
          <div className="contatoItem">
            <label>CPF:</label>
            <input type="number" />
          </div>
          <div className="inputRadio">
            <input type="radio" name='inputRadio'/>
            <label htmlFor="">Masculino</label>
            <input type="radio" name='inputRadio'/>
            <label htmlFor="">Feminino</label>
          </div>
          <button type='submit' className='formBtn'>Enviar</button>
        </form>
      </div>
    </div>
  )
}
