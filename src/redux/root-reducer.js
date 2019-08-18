import {combineReducers} from 'redux';

import bookReducer from './book/book-reducer';

export default combineReducers({
    book: bookReducer
})