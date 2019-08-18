import { bookActionTypes } from './book-types';


const INITIAL_STATE = {
    books: []
}

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case bookActionTypes.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        case bookActionTypes.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.payload.id)
            }
        case bookActionTypes.EDIT_BOOK:
            return {
                ...state,
                books: state.books.map((book) => book.id === action.id ? {...book,editing:!book.editing}:book)
            }
        default: 
            return state;
    }
}

export default bookReducer;