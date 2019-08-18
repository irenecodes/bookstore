import React, {Component} from 'react';
import './book-list.scss';

import { connect } from 'react-redux';

import EachBook from '../each-book/each-book-component';


const BookList = ({books}) => (
    <div className='book-list'>
        <div className="each-book-container">
            {
                books.map(book =>(
                    <EachBook key={book.id} book={book}/>
                ))
            }
        </div>
    </div>
)

const mapStateToProps = ({ book: { books } }) => ({
    books
})

export default connect(mapStateToProps)(BookList);