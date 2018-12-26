import React from 'react';
import { Route } from 'react-router-dom';

import Home from './containers/Home';
import Search from './containers/Search';

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
        <Route exact path="/" render={ _ => (
          <Home />
        )} />
        <Route path="/search" render={ _ => (
          <Search />
        )} />
			</div>
		)
	}

}

export default App
