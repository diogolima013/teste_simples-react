import React from "react";
import { useState } from "react";
import "./styles.css";

const Modal = ({ setModal, data }) => {

   const [name, setName] = useState('')
   const [profession, setProfe] = useState('')
   const [wage, setWage] = useState('')

  const addFunc = () => {
    if(name === '' || profession === '' || wage === 0) {
    alert('usuario invalido!')
    return
    }
    const usu = {
      id:data.length+1,
      name,
      profession,
      wage,
    }
    data.push(usu) 
  } ;



  return (
    <div className="modal">
      <div className="table-container">
        <div className="come-back-container">
          <button className="come-back-item" onClick={() => setModal(false)}>
            Voltar
          </button>
        </div>
        <div className="div-button">
          <h1>Adicionado novos funcionarios</h1>
        </div>
        <div className="container-input">
          <div className="div-input">
            <span>Nome</span>
            <input type="text" 
            placeholder="Nome" 
            value={name} 
            onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="div-input">
            <span>Profissao</span>
            <input type="text" placeholder="Profissao"
             value={profession} 
             onChange={(e) => setProfe(e.target.value)}/>
          </div>
          <div className="div-input">
            <span>Salario</span>
            <input type="number" placeholder="Salario"  
            value={wage} 
            onChange={(e) => setWage(e.target.value)}/>
          </div>
          <div className="div-button">
            <button className="button-add" onClick={addFunc}>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
