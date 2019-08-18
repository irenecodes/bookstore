import React from 'react';
import './each-book.scss';

import { connect } from 'react-redux';

import {deleteBook} from '../../redux/book/book-actions';

const EachBook = ({book, deleteBook}) => (
    <div className='each-book'>
        <h4>Title: {book.title}</h4>
        <p>Price in $: {book.price} </p>
        <p>Category: {book.category}</p>
        <p>Description: {book.description} </p>

        <button>EDIT</button>


        <div
            className='remove-button'
            onClick={() => deleteBook(book)}>
            Delete  &#10005;
        </div>

        <div
            className='remove-button'
            onClick={() => console.log('hi')}>
            Delete again  &#10005;
        </div>
    </div>
)


const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
})

export default connect(null, mapDispatchToProps)(EachBook);
