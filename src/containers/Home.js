import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* File that defines the existing shelves */
import shelfs from '../utils/Shelfs';

import Shelf from '../components/Shelf';

class Home extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    handleAddBooks: PropTypes.func.isRequired,
    handleOpenInfo: PropTypes.func
  }

  /*
   * Assigns the bookcase to the book according to the shelves available.
   */
  checkShelf = (books, shelf) => {
    return books.filter(book => (
      book.shelf === shelf
    ));
  }

  hashString = str => {
    return str + '_' + Math.random().toString(36).substr(2, 9);
  }

  render() {
    let { books, handleAddBooks, handleOpenInfo } = this.props;

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              { shelfs.map(shelf => (
                shelf.value !== 'none' 
                ? <Shelf key={ this.hashString(shelf.value) } title={ shelf.title } books={ this.checkShelf(books, shelf.value) } handleUpdateShelf={ handleAddBooks } handleOpenInfo={ handleOpenInfo } /> 
                : ''
              ))}
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

export default Home