import React from 'react';
import { Route } from 'react-router-dom';
import * as API from './utils/BooksAPI'

import Home from './containers/Home';
import Search from './containers/Search';

class App extends React.Component {

  state = {
    books: []
  };

  addBooksToShelf = (book) => {
    let books = [ ...this.state.books, book ];

    API.getAll().then(books => {
      this.setState({
        books: books
      })
    })
  }

  componentDidMount() {
    API.getAll().then(books => {
      this.setState({
        books: books
      })
    })
  }

	render() {
    let { books } = this.state;

		return (
			<div className="app-container">
        <Route exact path="/" render={ _ => (
          <Home books={ books } handleAddBooks={ this.addBooksToShelf } />
        )} />
        <Route path="/search" render={ _ => (
          <Search handleAddBooks={ this.addBooksToShelf } />
        )} />
			</div>
		)
	}

}

export default App
