import React from 'react';
import './homepage.scss';

import { Link } from 'react-router-dom';


import BookList from '../../components/book-list/book-list-component';

const HomePage = () => (
    <div className="homepage">
        <h1>Bookstore</h1>
        {/*goes to new page*/}
        <Link className='add-book-link' to='/addabook'>Add a book</Link>

        <BookList />

    </div>
)


export default HomePage;