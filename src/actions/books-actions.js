import axios from 'axios';
import {ADD_BOOK_ACTIONS, BOOKS_ACTIONS, DELETE_BOOK_ACTIONS, EDIT_BOOK_ACTIONS} from "../const";

export const GetAllBooks = () => async(dispatch) => {
  try {
    dispatch({
      type: BOOKS_ACTIONS.BOOKS_LIST_LOADING
    })

    const res = await axios.get('http://127.0.0.1:4000/books')
    dispatch({
      type: BOOKS_ACTIONS.BOOKS_LIST_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: BOOKS_ACTIONS.BOOKS_LIST_FAIL
    })
  }
}
export const AddBook = ({titleOfNewBook, authorOfNewBook}) => async(dispatch) => {
  try {
    dispatch({
      type: ADD_BOOK_ACTIONS.ADD_BOOK_LOADING
    })
    const res = await axios.post('http://127.0.0.1:4000/books',
      {
        title: titleOfNewBook,
        author: authorOfNewBook
      }
    )
    dispatch({
      type: ADD_BOOK_ACTIONS.ADD_BOOK_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: ADD_BOOK_ACTIONS.ADD_BOOK_FAIL
    })
  }
}
export const DeleteBook = ({idBook}) => async(dispatch) => {
  try {
    dispatch({
      type: DELETE_BOOK_ACTIONS.DELETE_BOOK_LOADING
    })
    const res = await axios.delete(`http://127.0.0.1:4000/books/${idBook}`)
    dispatch({
      type: DELETE_BOOK_ACTIONS.DELETE_BOOK_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: DELETE_BOOK_ACTIONS.DELETE_BOOK_FAIL
    })
  }
}
export const EditBook = ({idBook, titleOfNewBook, authorOfNewBook}) => async(dispatch) => {
  try {
    dispatch({
      type: EDIT_BOOK_ACTIONS.EDIT_BOOK_LOADING
    })
    await axios.put(`http://127.0.0.1:4000/books/${idBook}`,
      {
        title: titleOfNewBook,
        author: authorOfNewBook
      })
    dispatch({
      type: EDIT_BOOK_ACTIONS.EDIT_BOOK_SUCCESS
    })
  } catch (e) {
    dispatch({
      type: EDIT_BOOK_ACTIONS.EDIT_BOOK_FAIL
    })
  }
}