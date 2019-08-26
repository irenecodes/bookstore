import React, {Component} from 'react';
import './add-edit-styles.scss';

import uuidv1 from "uuid";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {addBook} from '../../redux/book/book-actions';

import Swal from 'sweetalert2';

class AddABookPage extends Component {
    constructor(){
        super();
        this.state={
            title: '',
            price: '',
            category: '',
            description: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, price, category, description} = this.state;
        
        // adds to array in redux
        const id = uuidv1();
        this.props.addBook({title, price, category, description, id})
        // resets field empty
        this.setState({
            title: '',
            price: '',
            category: '',
            description: '',
        })

        Swal.fire(
            'Success!',
            'You have submitted your entry.',
            'success'
        )
    }

    render() {
        const {title, price, category, description} = this.state;

        return (
            <div className='add-book-container'>
                <div className='instructions'>
                    <h3>Add your book entry using the fields below:</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor="title">Book Title:</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className='input-field'>
                        <label htmlFor="price">Price in $:</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="price"
                            value={price}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='input-field'>
                        <label htmlFor="category">Category:</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className='input-field'>
                        <label htmlFor="description">Description:</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type="submit" className="add-book-link">
                        ADD BOOK
                    </button>
                </form>
                <Link className='link' to='/'>RETURN TO HOMEPAGE</Link> 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addBook: book => dispatch(addBook(book))
})

export default connect(
    null,
    mapDispatchToProps
)(AddABookPage);