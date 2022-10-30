import React from 'react';
import './modal-form.scss';
import {projectImages} from "../../assets/image";

const ModalForm = ({
  modalName,
  modalSubmitFunc,
  modalCloseFunc,
  modalSubmitFormFunc,
  currentItem = null
}) => {
  return (
    <form
      className='modal-form'
      onClick={modalSubmitFunc}
    >
      <div className="modal-close">
        <div
          className="modal-close-sign"
          onClick={modalCloseFunc}
        >
          {projectImages.add}
        </div>
      </div>
      {
        modalName !== 'delete' ? (
          <>
            <label htmlFor="title">
              <span>Title:</span>
            </label>
            <input name="title" type="text" placeholder={currentItem?.title} />
            <label htmlFor="author">
              <span>Author:</span>
            </label>
            <input name="author" type="text" placeholder={currentItem?.author} />
          </>
        ) : (
          <>
            <div>
            <span>
              Вы действительно хотите удалить запись ?
            </span>
            </div>
            <div>
              <span>Title: {currentItem.title} </span>
              <span>Author: {currentItem.author}</span>
            </div>
          </>
        )
      }

      <div className="modal-button-container">
        <button onClick={modalCloseFunc}>Cancel</button>
        <button onClick={modalSubmitFormFunc}>Submit</button>
      </div>
    </form>
  );
};

export default ModalForm;