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
        // const {id} = this.props.book;

        

        this.props.updateBook({ title, price, category, description});
        // console.log(id);


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
                        <div className='input-field'>
                            <label htmlFor="title">Book Title:</label>
                            <input 
                                required type="text" 
                                value={title} placeholder="Enter book title"
                                onChange={this.handleChange}
                                id="title"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="price">Price:</label>
                            <input
                                required type="text" 
                                value={price} placeholder="Enter book price"
                                onChange={this.handleChange}
                                id="price"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="category">Category:</label>
                            <input
                                required type="text" 
                                value={category} placeholder="Enter book category"
                                onChange={this.handleChange}
                                id="category"
                            />
                        </div>
                        <div className='input-field'>
                            <label htmlFor="description">Description</label>
                            <input
                                required type="text" 
                                value={description} placeholder="Enter book description"
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

// const mapStateToProps = (state) => {
//     return {
//         book: state
//     }
// }

const mapStateToProps = ({ book: { books } }) => ({
    books
})

const mapDispatchToProps = dispatch => ({
    updateBook: book => dispatch(updateBook(book))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

