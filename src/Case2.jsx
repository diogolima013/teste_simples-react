import React from "react";
import { useState } from "react";
import Modal from "./Components/Modal";
import "./styles.css";

const Case2 = ({ data }) => {

  const[modal, setModal] = useState(true)

  return (
    <div className="table-function">
       {modal ? (
        <div className="modal">
          <Modal setModal={setModal} data={data}/>
        </div>
      ) : (
        <div className="table-container">
          <div className="div-button">
            <h1>Tabela de funcionarios</h1>
            <button onClick={() => setModal(true)}>
              Adicionar novo funcionario
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Profissão</th>
                <th>Salário</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map(usuario => {
                return (
                  <tr>
                      <th>{usuario.id}</th>
                      <th>{usuario.name}</th>
                      <th>{usuario.profession}</th>
                      <th>{usuario.wage}</th>
                  </tr> 
                  )                  
                })
              }
            </tbody>
          </table>
        </div>
      )} 
    </div>
  );
};

export default Case2;
