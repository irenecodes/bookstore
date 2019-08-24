import React, {Component} from 'react';
import './edit.scss';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateBook } from '../../redux/book/book-actions'

class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            price: '',
            category: '',
            description: '',
        }
    }

    componentDidMount() {
        const { book: { id } } = this.props.location.state;
        const isoBook = this.props.books.find(book => book.id === id)

        this.setState({
            title: isoBook.title,
            price: isoBook.price,
            category: isoBook.category,
            description: isoBook.description,
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleEdit = e => {
        e.preventDefault();
        const { title, price, category, description} = this.state;
        const { book: { id }} = this.props.location.state;
        this.props.updateBook({ title, price, category, description, id});
    }
       
    render() {
        const { title, price, category, description } = this.state;

        return (
            <div>
                <h4>Enter corrections below in the corresponding fields:</h4>
                <form onSubmit={this.handleEdit}>
                        <div className='input-field'>
                            <label htmlFor="title">Book Title:</label>
                            <input 
                                required type="text" 
                                value={title}
                                onChange={this.handleChange}
                                id="title"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="price">Price:</label>
                            <input
                                required type="text" 
                                value={price} 
                                onChange={this.handleChange}
                                id="price"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="category">Category:</label>
                            <input
                                required type="text" 
                                value={category} 
                                onChange={this.handleChange}
                                id="category"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="description">Description</label>
                            <input
                                required type="text" 
                                value={description} 
                                onChange={this.handleChange}
                                id="description"
                            />
                        </div>
                    <button type="submit" className="edit-book-link">
                        Submit edits
                    </button>
                </form>
                <Link to='/'>RETURN TO HOMEPAGE</Link>
            </div>
        )
    }
}


const mapStateToProps = ({ book: { books } }) => ({
    books
})


const mapDispatchToProps = dispatch => ({
    updateBook: book => dispatch(updateBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

