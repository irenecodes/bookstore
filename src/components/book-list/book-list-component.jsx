import React from 'react';
import './book-list.scss';

import { connect } from 'react-redux';

import EachBook from '../each-book/each-book-component';


const BookList = ({books}) => (
    <div className='book-list wrapper'>
        {
            books.map(book =>(
                <EachBook key={book.id} book={book}/>
            ))
        }    
    </div>
)

const mapStateToProps = ({ book: { books } }) => ({
    books
})

export default connect(mapStateToProps)(BookList);