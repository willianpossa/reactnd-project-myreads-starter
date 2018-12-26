import React from 'react';
import { Link } from 'react-router-dom';

import * as API from '../api/BooksAPI';
import Book from '../components/Book';

class Search extends React.Component {
    
    state = {
        value: '',
        results: []
    }

    searchBook = ({ target: { value } }) => {
        API.search(value).then(results => {
            this.setState(_ => ({
                results: results ? results : []
            }));
        });
    }

    render() {
        let { results } = this.state;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
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
                                    title={ book.title }
                                    authors={ book.authors }
                                    image={ book.imageLinks ? book.imageLinks.thumbnail : '' }
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