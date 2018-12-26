import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'
import { Link } from 'react-router-dom';

import Shelf from '../components/Shelf';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf title="Currently Reading" />
              <Shelf title="Want to Read" />
              <Shelf title="Read" />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp