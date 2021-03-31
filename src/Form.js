import React, { useState } from "react";
import './App.css'
import base from 'firebase'
// eslint-disable-next-line
import firebase from "firebase/app"; 

const Form = (props) => {
  const [usuario, setUsuario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState();
  
  const onSubmit = e => {
    e.preventDefault()
    base
      .firestore()
      .collection("taugor")
      .add({
        titulo,
        descricao,
        status,
        usuario,
      })
      .then(() => setTitulo(""), setDescricao(""), setStatus(""), setUsuario(""))
      alert('Cadastro realizado com sucesso.');
  }

  return (
    <div>
      <form className="form">
        <label>Titulo: </label>
        <input
          type=" text"
          autoFocus
          required
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label>Descrição: </label>
        <input
          type=" text"
          autoFocus
          required
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <label>Responsavel: </label>
        <input
          type=" text"
          autoFocus
          required
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <p>Status</p>
        <select id="comboA"  value="0" required onChange={(e) => setStatus(e.target.value)}>
          <option value="">Selecione o status</option>
          <option value={status}>Em andamento</option>
          <option value={status}>Pendente</option>
          <option value={status}>Finalizada</option>
          <option value={status}>Cancelada</option>
        </select>
        <br/>
        <button onClick={onSubmit}>Cadastrar</button>

        </form>
        <div>
          <h1>Lista de atividades</h1>
        </div>
    </div>
  )
}

export default Form
