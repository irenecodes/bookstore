import React from 'react';
import './each-book.scss';

const EachBook = ({book}) => (
    <div className='each-book'>
        <h4>Title: {book.title}</h4>
        <p>Price: {book.price} </p>
        <p>Category: {book.category}</p>
        <p>Description: {book.description} </p>

        <button>DELETE BOOK</button>
    </div>
)

export default EachBook;
