import React, {Component} from 'react';
import './each-book.scss';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

import {deleteBook} from '../../redux/book/book-actions';

import Swal from 'sweetalert2';



class EachBook extends Component {

    confirmDelete = e => {
        const { book } = this.props;

        Swal.fire({
            title: 'Are you sure you want to delete?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your book has been deleted.',
                    'success'
                )
                this.props.deleteBook(book)
            }
        })
    }


    render () {
        const {book} = this.props;
        return (
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
                    onClick={this.confirmDelete}
                    >
                    Delete  &#10005;
        </div>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    deleteBook: book => dispatch(deleteBook(book)),
})



export default connect(null, mapDispatchToProps)(EachBook);
