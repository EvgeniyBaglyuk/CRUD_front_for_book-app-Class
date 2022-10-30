import {EDIT_BOOK_ACTIONS} from "../const";

const DefaultState = {
  loading: false,
  errorMessage: ''
}

export const EditBooksReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case EDIT_BOOK_ACTIONS.EDIT_BOOK_LOADING:
      return {
        loading: true,
        errorMessage: ''
      };
    case EDIT_BOOK_ACTIONS.EDIT_BOOK_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'there is something wrong with the server when trying to edit a book'
      }
    case EDIT_BOOK_ACTIONS.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: ''
      }
    default:
      return state;
  }
}