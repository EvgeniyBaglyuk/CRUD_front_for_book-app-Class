import {BOOKS_ACTIONS} from "../const";

const DefaultState = {
  loading: false,
  data: [],
  errorMessage: ''
}

export const AllBooksReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case BOOKS_ACTIONS.BOOKS_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMessage: ''
      };
    case BOOKS_ACTIONS.BOOKS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMessage: 'something wrong with server'
      }
    case BOOKS_ACTIONS.BOOKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: ''
      }
    default:
      return state;
  }
}