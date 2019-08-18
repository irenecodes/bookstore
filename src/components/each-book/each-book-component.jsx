import React, {Component} from 'react';
import './each-book.scss';

import { connect } from 'react-redux';

import {deleteBook} from '../../redux/book/book-actions';

class EachBook extends Component {
    // constructor(){
    //     super();

    // }

    deleteBook = e => {
        e.preventDefault();
        this.props.deleteBook()
    }

    render() {
        const {book} = this.props;
        return (
            <div className='each-book'>
                <h4>Title: {book.title}</h4>
                <p>Price in $: {book.price} </p>
                <p>Category: {book.category}</p>
                <p>Description: {book.description} </p>

                <button>EDIT</button>
                <button onClick={this.deleteBook}>DELETE BOOK</button>
            </div>
        )

    }
}
// const EachBook = ({book}) => (
//     <div className='each-book'>
//         <h4>Title: {book.title}</h4>
//         <p>Price in $: {book.price} </p>
//         <p>Category: {book.category}</p>
//         <p>Description: {book.description} </p>

//         <button>EDIT</button>
//         <button onClick={this.deleteBook}>DELETE BOOK</button>
//     </div>
// )

const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book))
})

export default connect(null, mapDispatchToProps)(EachBook);
