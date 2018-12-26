import React from 'react';
import PropTypes from 'prop-types';
import * as API from '../utils/BooksAPI';
import shelfs from '../utils/Shelfs';

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateShelf: PropTypes.func.isRequired
    };

    threatAuthors = (authors) => {
        if(authors) {
            return authors.join(', ');
        } else {
            return <p>Não informado</p>
        }
    }

    setShelf = ({ target: { value } }) => {
        let { book } = this.props;

        API.update(book, value).then(response => {
            this.props.updateShelf(book);
        })
    }

    render() {
        let { book } = this.props;

        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail : '' })` 
                    }}></div>
                    <div className="book-shelf-changer">
                    <select value={ book.shelf ? book.shelf : 'none' } onChange={ this.setShelf }>
                        <option value="move" disabled>Move to...</option>
                        { shelfs.map(shelf => (
                            <option key={ shelf.value } value={ shelf.value }>{ shelf.title }</option>
                        )) }
                    </select>
                    </div>
                </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ this.threatAuthors(book.authors) }</div>
                </div>
            </li>
        );
    }
}

export default Book;