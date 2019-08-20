import React from 'react';
import './each-book.scss';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import {deleteBook} from '../../redux/book/book-actions';


const EachBook = ({book, deleteBook}) => (
    <div className='each-book'>
        <h4>Title: {book.title}</h4>
        <p>Price in $: {book.price} </p>
        <p>Category: {book.category}</p>
        <p>Description: {book.description} </p>
        
        <Link to={{
            pathname: '/editbook',
            state: {
                book: book
            }
        }}> Edit </Link>


        <div
            className='remove-button'
            onClick={() => deleteBook(book)}>
            Delete  &#10005;
        </div>

    </div>
)


const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book)),
})



export default connect(null, mapDispatchToProps)(EachBook);
