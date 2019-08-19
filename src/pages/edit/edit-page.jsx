import React, {Component} from 'react';
import './edit.scss';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateBook } from '../../redux/book/book-actions'

class EditPage extends Component {

    // need to pass in current values for the book that needs to be edited

    constructor() {
        super();
        this.state = {
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

    handleEdit = e => {
        e.preventDefault();
        const { title, price, category, description} = this.state;

        this.props.updateBook({ title, price, category, description, id: this.props.book.id});

        this.setState({
            title: '',
            price: '',
            category: '',
            description: '',
        })
    }
    
    
    render() {
        const { title, price, category, description } = this.state;
        return (
            <div>
                <h4>Enter corrections below in the corresponding fields:</h4>

                <form onSubmit={this.handleEdit}>
                        <label htmlFor="title">Book Title:</label>
                        <input 
                            required type="text" 
                            value={title} placeholder="Enter Book Title"
                            onChange={this.handleChange}
                            id="title"
                        />
                        <label htmlFor="price">Price:</label>
                        <input
                            required type="text" 
                            value={price} placeholder="Enter Book Price"
                            onChange={this.handleChange}
                            id="price"
                        />
                        <label htmlFor="category">Category:</label>
                        <input
                            required type="text" 
                            value={category} placeholder="Enter Book category"
                            onChange={this.handleChange}
                            id="category"
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            required type="text" 
                            value={description} placeholder="Enter Book description"
                            onChange={this.handleChange}
                            id="description"
                        />
                    <button>
                        Submit edits
                    </button>
                </form>
                <Link to='/'>RETURN TO HOMEPAGE</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state
    }
}

// const mapStateToProps = ({ book: { books } }) => ({
//     books
// })

const mapDispatchToProps = dispatch => ({
    updateBook: book => dispatch(updateBook(book))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

