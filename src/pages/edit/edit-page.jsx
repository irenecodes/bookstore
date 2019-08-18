import React, {Component} from 'react';
import './edit.scss';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { editBook, updateBook } from '../../redux/book/book-actions'
import { bookActionTypes } from '../../redux/book/book-types';

class EditPage extends Component {

    // need to pass in current values for the book that needs to be edited

    handleEdit = e => {
        e.preventDefault();
        // const { title, price, category, description } = this.state;

        const newTitle = this.getTitle.value;
        const newPrice = this.getPrice.value;
        const newCategory = this.getCategory.value;
        const newDescription = this.getDescription.value;
        const data = {
            newTitle, newPrice,
            newCategory, newDescription
        }

        // this.props.updateBook({ title, price, category, description })
        this.props.dispatch({ type: 'UPDATE', id: this.props.book.id, data: data })
    }
    
    
    render() {
        // const { book } = this.state;
        return (
            <div>
                <h4>Enter corrections below in the corresponding fields:</h4>


                

                <form onSubmit={this.handleEdit}>
                
                        <input 
                            required type="text" ref={(input) => this.getTitle = input}
                            defaultValue={this.props.book.title} placeholder="Enter Book Title"
                        />
                        <input
                            required type="text" ref={(input) => this.getPrice = input}
                            defaultValue={this.props.book.price} placeholder="Enter Book Price"
                        />
                        <input
                            required type="text" ref={(input) => this.getCategory = input}
                            defaultValue={this.props.book.category} placeholder="Enter Book category"
                        />
                        <input
                            required type="text" ref={(input) => this.getDescription = input}
                            defaultValue={this.props.book.description} placeholder="Enter Book description"
                        />
                        






                    <button 
                        
                    >
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

const mapDispatchToProps = dispatch => ({
    updateBook: book => dispatch(updateBook(book))
})


export default connect(mapStateToProps)(EditPage);

