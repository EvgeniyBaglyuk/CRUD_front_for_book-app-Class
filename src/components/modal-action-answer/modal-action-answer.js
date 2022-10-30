import React from 'react';
import './modal-action-answer.scss';

const ModalActionAnswer = ({lastAddedBook, lastDeletedBook, lastEditBook, showPopup}) => {
  return (
    <>
      {
        lastAddedBook?.loading &&
        <div className="answer-from-modal-action">
          <div className="answer-from-modal-action__message">
            <span>loading a book</span>
          </div>
        </div>
      }
      {
        !lastAddedBook?.errorMessage &&
        showPopup &&
        <div className="answer-from-modal-action">
          <div className="answer-from-modal-action__message">
            <span>operation was completed</span>
          </div>
        </div>
      }
      {
        (lastAddedBook?.errorMessage
          || lastDeletedBook?.errorMessage
          || lastEditBook?.errorMessage) &&
        showPopup &&
        <div className="answer-from-modal-action">
          <div className="answer-from-modal-action__message">
            <span>there is something wrong with the server</span>
          </div>
        </div>
      }
      {
        lastDeletedBook?.loading &&
        <div className="answer-from-modal-action">
          <div className="answer-from-modal-action__message">
            <span>waiting for the book to be deleted</span>
          </div>
        </div>
      }
      {
        lastEditBook?.loading &&
        <div className="answer-from-modal-action">
          <div className="answer-from-modal-action__message">
            <span>waiting for the book to be changed</span>
          </div>
        </div>
      }
    </>
  );
};

export default ModalActionAnswer;