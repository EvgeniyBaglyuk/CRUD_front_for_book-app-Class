import {ADD_BOOK_ACTIONS} from "../const";

const DefaultState = {
  loading: false,
  errorMessage: ''
}

export const AddBooksReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case ADD_BOOK_ACTIONS.ADD_BOOK_LOADING:
      return {
        loading: true,
        errorMessage: ''
      };
    case ADD_BOOK_ACTIONS.ADD_BOOK_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'there is something wrong with the server when trying to add a book'
      }
    case ADD_BOOK_ACTIONS.ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: ''
      }
    default:
      return state;
  }
}