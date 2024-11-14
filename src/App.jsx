import {FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import './App.css'
export default function App(){

  const[input, setInput] = useState('Teste 123')
  return(
    <div className="container">
      <h1 className="title"> Buscador de CEP</h1>

      <div className="container-input">
        <input 
        type="text"
        name="input-cep"
        id="input-cep"
        placeholder="Digite seu cep..." />
        
        <button className="button-search"><FiSearch size={25} color="#FFF"/></button>
      </div>
      <main className="main">
        <h2>CEP: 79003222</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum complemento</span>
      </main>
    </div>
  )
}