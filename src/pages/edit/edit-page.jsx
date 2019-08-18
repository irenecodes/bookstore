import React, {Component} from 'react';
import './edit.scss';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { editBook } from '../../redux/book/book-actions'

class EditPage extends Component {
    handleEdit = e => {
        e.preventDefault();
        const { title, price, category, description } = this.state;
        // const newTitle = this.editedTitle.value;
        // const newPrice = this.editedPrice.value;
        // const newCategory = this.editedCategory.value;
        // const newDescription = this.editedDescription.value;

        this.props.updateBook({ title, price, category, description })
    }
    
    
    render() {
        // const { title, price, category, description } = this.state;
        return (
            <div>
                <h4>Enter corrections below in the corresponding fields:</h4>
                <form onSubmit={this.handleEdit}>
                






                    <button type="submit">
                        Submit edits
                    </button>
                
                </form>
        
                <Link to='/'>RETURN TO HOMEPAGE</Link>
            </div>
        )
    }
}


export default EditPage;

