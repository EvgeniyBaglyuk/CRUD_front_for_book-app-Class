import {DELETE_BOOK_ACTIONS} from "../const";

const DefaultState = {
  loading: false,
  errorMessage: ''
}

export const DeleteBooksReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case DELETE_BOOK_ACTIONS.DELETE_BOOK_LOADING:
      return {
        loading: true,
        errorMessage: ''
      };
    case DELETE_BOOK_ACTIONS.DELETE_BOOK_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'there is something wrong with the server when trying to add a book'
      }
    case DELETE_BOOK_ACTIONS.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: ''
      }
    default:
      return state;
  }
}