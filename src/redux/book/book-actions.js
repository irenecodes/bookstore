import { bookActionTypes } from './book-types';


export const addBook = book => ({
    type: bookActionTypes.ADD_BOOK,
    payload: book
})

export const deleteBook = book => ({
    type: bookActionTypes.DELETE_BOOK,
    payload:book
})