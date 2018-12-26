import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class Shelf extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    };

    render() {
        let { title, books, handleUpdateShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    { books.length > 0 ? (
                        <ol className="books-grid">
                            { books.map(book => (
                                <Book 
                                    key={ book.id } 
                                    book={ book } 
                                    updateShelf={ handleUpdateShelf } 
                                />
                            )) }
                        </ol>
                    ) : (
                        <p>Nenhum livro adicionado a esta estante</p>
                    )}
                </div>
            </div>
        );
    }
}

export default Shelf;