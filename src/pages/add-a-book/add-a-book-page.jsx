import React, {Component} from 'react';
import './add-a-book-page';

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
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, price, category, description} = this.state;
        const id = e.target.value;
        // adds to array in redux
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
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Book Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="price">Price in $:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={price}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="category">Category:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            value={category}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit">
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