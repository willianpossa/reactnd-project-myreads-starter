import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as API from '../utils/BooksAPI';
import Book from '../components/Book';

class Search extends React.Component {

    static propTypes = {
        handleAddBooks: PropTypes.func.isRequired,
        handleOpenInfo: PropTypes.func,
        myBooks: PropTypes.array.isRequired
    }
    
    state = {
        value: '',
        results: []
    }

    /*
     * Checks if the item found is already among the items added and sets its current shelf on the search screen.
     */
    setShelf = (result) => {
        let { myBooks } = this.props,
            haveShelf = myBooks.filter(book => book.id === result.id);

        return haveShelf.length > 0 ? haveShelf[0].shelf : 'none';
    }

    /*
     * It does the search every time the user changes the value of the search field.
     */
    searchBook = ({ target: { value } }) => {
        let searchResults = [];

        API.search(value).then(results => {
            if(results !== undefined && results.length > 0 && !results.error) {
                searchResults = results.map(result => {
                    result.shelf = this.setShelf(result)

                    return result;
                })
            } else {
                searchResults = [];
            }

            this.setState({
                value,
                results: searchResults
            });
        });
    }

    render() {
        let { results } = this.state;
        let { handleAddBooks, handleOpenInfo } = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            id="search-book-field"
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={ this.searchBook }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    { results.length > 0 
                    ? (
                        <ol className="books-grid">
                            { results.map(book => (
                                <Book 
                                    key={ book.id }
                                    book={ book }
                                    updateShelf={ handleAddBooks }
                                    handleOpenInfo={ handleOpenInfo }
                                />
                            )) }
                        </ol>
                    ) : (
                        <p>Sem resultados encontrados para sua busca.</p>
                    )}
                </div>
            </div>
        )
    }
}

export default Search;