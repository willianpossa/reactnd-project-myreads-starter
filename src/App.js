import React from 'react';
import { Route } from 'react-router-dom';
import ReactLoading from 'react-loading';

import * as API from './utils/BooksAPI'

import Home from './containers/Home';
import Search from './containers/Search';

class App extends React.Component {

  state = {
    books: [],
    loading: false
  };

  addBooksToShelf = (book) => {

    this.setState({
      loading: true
    })

    API.getAll().then(books => {
      this.setState({
        books,
        loading: false
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
    let { books, loading } = this.state;

    return (
      <div className="app-container">
        <div className={ loading ? 'loading-holder active-loading' : 'loading-holder' }>
          <ReactLoading type={'bubbles'} color={'#FFF'} height={95} width={100} />
        </div>
        <Route exact path="/" render={ _ => (
          <Home books={ books } handleAddBooks={ this.addBooksToShelf } />
        )} />
        <Route path="/search" render={ _ => (
          <Search myBooks={ books } handleAddBooks={ this.addBooksToShelf } />
        )} />
      </div>
    )
	}

}

export default App
