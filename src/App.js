import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";

import ReactLoading from 'react-loading';

import * as API from './utils/BooksAPI'

import Home from './containers/Home';
import Search from './containers/Search';
import ModalBook from './components/ModalBook';

const history = createBrowserHistory()

class App extends React.Component {

  state = {
    books: [],
    loading: false,
    modalState: false,
    currentBook: {}
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

  openInfoBook = book => {
    this.setState(currentState => ({
      modalState: true,
      currentBook: book
    }))
  }

  closeModalInfo = () => {
    this.setState({
      modalState: false
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
    let { books, loading, modalState, currentBook } = this.state;

    return (
      <div className="app-container">
        <div className={ loading ? 'loading-holder active-loading' : 'loading-holder' }>
          <ReactLoading type={'bubbles'} color={'#FFF'} height={95} width={100} />
        </div>
        <Router history={ history }>
          <Switch>
            <Route exact path="/" render={ _ => (
              <Home books={ books } handleAddBooks={ this.addBooksToShelf } handleOpenInfo={ this.openInfoBook } />
            )} />
            <Route path="/search" render={ _ => (
              <Search myBooks={ books } handleAddBooks={ this.addBooksToShelf } handleOpenInfo={ this.openInfoBook } />
            )} />
          </Switch>
        </Router>
        <ModalBook statusModal={ modalState } closeModalInfo={ this.closeModalInfo } book={ currentBook } />
      </div>
    )
	}

}

export default App