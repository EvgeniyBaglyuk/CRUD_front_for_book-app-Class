import React from 'react';
import './modal.scss';
import {connect} from 'react-redux';
import _ from 'lodash';
import ModalActionAnswer from "../modal-action-answer";
import ModalForm from "../modal-form";
import {AddBook, DeleteBook, EditBook, GetAllBooks} from "../../actions/books-actions";

class ModalC extends React.Component {
  state = {
    showPopup: false,
  }

  modalSubmit = (e) => {
    e.preventDefault()
  }
  setShowPopup = () => {
    this.setState(state => {
      return {
        showPopup: !state.showPopup
      }
    })
  }
  submitForm = (e, modalName, idBook = null) => {
    const {
      openModalFunc,
      AddBook,
      GetAllBooks,
      DeleteBook,
      EditBook,
    } = this.props;
    openModalFunc(modalName);
    if (modalName === 'add') {
      AddBook(
        {
          titleOfNewBook: e.target.form[0].value,
          authorOfNewBook: e.target.form[1].value
        }
      ).then(()=> {
        this.setShowPopup();
        GetAllBooks();
      });
    }
    if (modalName === 'delete') {
      DeleteBook({idBook}).then(()=> {
        this.setShowPopup();
        GetAllBooks();
      });
    }
    if (modalName === 'edit') {
      EditBook({
        idBook: idBook,
        titleOfNewBook: e.target.form[0].value,
        authorOfNewBook: e.target.form[1].value
      }).then(()=> {
        this.setShowPopup();
        GetAllBooks()
      });
    }
  }
  showData = () => {
    const {openModal, currentItem, openModalFunc} = this.props;

    if (openModal.add) {
      return (
        <ModalForm
          modalName='add'
          modalSubmitFunc={this.modalSubmit}
          modalCloseFunc={() => openModalFunc('add')}
          modalSubmitFormFunc={(e) => this.submitForm(e,'add')}
        />
      )
    }
    if (openModal.edit) {
      return (
        <ModalForm
          modalName='edit'
          modalSubmitFunc={this.modalSubmit}
          modalCloseFunc={() => openModalFunc('edit')}
          modalSubmitFormFunc={(e) => this.submitForm(e,'edit', currentItem.idBook)}
          currentItem={currentItem}
        />
      )
    }
    if (openModal.delete) {
      return (
        <ModalForm
          modalName='delete'
          modalSubmitFunc={this.modalSubmit}
          modalCloseFunc={() => openModalFunc('delete')}
          modalSubmitFormFunc={(e) => this.submitForm(e, 'delete', currentItem.idBook)}
          currentItem={currentItem}
        />
      )
    }
  }

  render() {
    const {showPopup} = this.state;
    const {
      openModal,
      openModalFunc,
      lastAddedBook,
      lastDeletedBook,
      lastEditBook,
    } = this.props;
    const showModal = _.values(openModal).some(el => el === true)
    return (
      <>
        {showModal && (
          <div className='modal-container'>
            <div className='modal-window'>
              {this.showData(openModal, openModalFunc)}
            </div>
          </div>
        )}
        <ModalActionAnswer
          lastAddedBook={lastAddedBook}
          lastDeletedBook={lastDeletedBook}
          lastEditBook={lastEditBook}
          showPopup={showPopup}
        />
      </>
    );
  };
};

function mapStateToProps(state) {
  return {
    lastAddedBook: state.lastAddedBook,
    lastDeletedBook: state.lastDeletedBook,
    lastEditBook: state.lastEditBook,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    AddBook: ({titleOfNewBook, authorOfNewBook}) => dispatch(AddBook({titleOfNewBook, authorOfNewBook})),
    GetAllBooks: () => dispatch(GetAllBooks()),
    DeleteBook: ({idBook}) => dispatch(DeleteBook({idBook})),
    EditBook: ({idBook, titleOfNewBook, authorOfNewBook}) =>
      dispatch(EditBook({idBook, titleOfNewBook, authorOfNewBook})),
  }
}

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalC);