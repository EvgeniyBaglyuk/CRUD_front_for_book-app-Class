import { combineReducers } from "redux";
import {AllBooksReducer} from "./BooksReducer";
import {AddBooksReducer} from "./AddBookReducer";
import {DeleteBooksReducer} from "./DeleteBookReducer";
import {EditBooksReducer} from "./EditBookReducer";

export const rootReducer = combineReducers({
  allBooks: AllBooksReducer,
  lastAddedBook: AddBooksReducer,
  lastDeletedBook: DeleteBooksReducer,
  lastEditBook: EditBooksReducer,
})