import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const Shelf = ({title, books, handleUpdateShelf, handleOpenInfo}) => {

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
                                handleOpenInfo={ handleOpenInfo }
                            />
                        )) }
                    </ol>
                ) : (
                    <p>Nenhum livro adicionado a esta estante</p>
                )}
            </div>
        </div>
    )
};

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleUpdateShelf: PropTypes.func.isRequired,
    handleOpenInfo: PropTypes.func
};

export default Shelf;