import React from 'react';
import { useFormState } from './FormContext';

type modalType = {
  setOpenModal: (status: boolean) => void;
};

function Modal({ setOpenModal }: modalType) {
  const { formData, onHandleNext } = useFormState();

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>O CNPJ é o abaixo?</h1>
        </div>
        <div className="body">
          <p>{formData.cnpj}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            NÃO
          </button>
          <button onClick={() => onHandleNext()}>SIM</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
