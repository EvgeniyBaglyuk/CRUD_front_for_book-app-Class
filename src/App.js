import React from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import './App.scss';
import {GetAllBooks} from "./actions/books-actions";
import {projectImages} from "./assets/image";
import ListItem from "./components/list-item";
import Header from "./components/header";
import Modal from "./components/modal";

class AppC extends React.Component {
  state = {
    openModal: {
      add: false,
      edit: false,
      delete: false,
    },
    currentItem: null,
  }
  componentDidMount() {
    this.props.getAllBooks();
  }

  openModalFunc = (sigh, data) => {
    if (sigh !== 'add') {
      this.setState(() => {
        return {
          currentItem: data
        }
      })
    }
    this.setState(state => {
      return {
        openModal: {
          // ...state.openModal,
          [sigh]: !state.openModal[sigh]
        }
      }
    })
  }
  showData = () => {
    const {booksState} = this.props;

    if (!_.isEmpty(booksState?.data)) {
      return (
        booksState?.data.map(item => {
          return (
            <ListItem
              key={item.id}
              idBook={item.id}
              title={item.title}
              author={item.author}
              openModalFunc={this.openModalFunc}
            />
          )
        })
      )
    }
  }

  render() {
    const {openModal, currentItem} = this.state;
    const {booksState} = this.props
    return (
      <div style={{position: "relative"}}>
        <Header />
        {JSON.stringify(this.state)}
        <main className='main-container'>
          <div className="add-book">
            <span>Add book</span>
            <button onClick={() => this.openModalFunc('add')}>
              {projectImages.add}
            </button>
          </div>
          {booksState?.loading ? <span>Loading...</span> : this.showData()}
          {booksState?.errorMessage && <span>{booksState?.errorMessage}</span>}
        </main>
        <Modal
          openModal={openModal}
          currentItem={currentItem}
          openModalFunc={this.openModalFunc}
        />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    booksState: state.allBooks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBooks: () => dispatch(GetAllBooks())
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppC);
