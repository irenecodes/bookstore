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
                    if (book.id === action.id) {
                        //    return {
                        //        ...book,
                        //        title: action.data.newTitle,
                        //        price: action.data.newPrice,
                        //        category: action.data.newCategory,
                        //        description: action.data.newDescription,
                        //        editing: !book.editing
                        //    }
                        return {
                            ...book,
                            title: book.title,
                            price: book.price,
                            category: book.category,
                            description: book.description,
                            editing: !book.editing
                        }
                    }
                })
          
            } 

        default: 
            return state;
    }
}

export default bookReducer;