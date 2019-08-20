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

        case bookActionTypes.UPDATE_BOOK:
            const editedBooks = state.books.map(book => {
                if (book.id === action.payload.id) {
                    return action.payload;
                }
                return book;
            });
            return { ...state, books: editedBooks };
        default: 
            return state;
    }
}

export default bookReducer;