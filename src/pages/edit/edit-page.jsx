import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateBook } from '../../redux/book/book-actions';

import Swal from 'sweetalert2'

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
        Swal.fire(
            'Success!',
            'You have edited your entry.',
            'success'
        )
    }
       
    render() {
        const { title, price, category, description } = this.state;

        return (
            <div className='edit-book-container'>
                <div className='instructions'>
                    <h3> Enter corrections below in the corresponding fields:</h3>
                </div>
                
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
                            <label htmlFor="price">Price in $:</label>
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
                        SUBMIT EDITS
                    </button>
                </form>
                <Link className='link' to='/'>RETURN TO HOMEPAGE</Link>
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

