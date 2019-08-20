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
            return {
                ...state,
                books: state.books.map((book) => {
                    if (book.id === action.payload.id) {
                        return {
                            title: action.payload.title,
                            price: action.payload.price,
                            category: action.payload.category,
                            description: action.payload.description,
                        }
                    } else {
                        return book;
                    }
                })
            } 
            // return {
            //     ...state,

            //     // write a function here to allow update of indiv books in books array
            //     books: state.books.find(book => book.id === action.payload.id)
            // }

        default: 
            return state;
    }
}

export default bookReducer;