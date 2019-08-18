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
        default: 
            return state;
    }
}

export default bookReducer;