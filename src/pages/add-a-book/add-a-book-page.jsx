import React, {Component} from 'react';
import './add-a-book-page';
import uuidv1 from "uuid";

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import {addBook} from '../../redux/book/book-actions'

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

    }

    render() {
        const {title, price, category, description} = this.state;

        return (
            <React.Fragment>
                <div className="wrapper">
                    <h3>Book Entry</h3>
                    <p>Type in your book entry below and click "ADD BOOK" when done to add to the book store. Use your browser's back key or click "RETURN TO HOMEPAGE" to see your entire book store. </p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
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
                    </div>
                    <button type="submit" className="add-book-link">
                        ADD BOOK
                    </button>
                </form>
                <Link to='/'>RETURN TO HOMEPAGE</Link> 
            </React.Fragment>
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