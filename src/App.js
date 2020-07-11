import React, { Component } from 'react';  
import './App.css';
import 'bulma/css/bulma.css';
import { Title }  from './component/title';
import { SearchForm } from './component/search-form';
import { MoviesList } from './component/movieList';

import { Detail } from '../src/pages/Details';


class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = (results) =>{
    this.setState({ results, usedSearch: true });
  }

  _renderResults() {
    return this.state.results.length === 0 
      ? <p>Sorry! Results not found!</p> 
      : <MoviesList movies={this.state.results} />
    
  }


  render(){
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />
    }
    return (
      <div className="App">
        <Title>Search your movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResult={this._handleResults} />
        </div>
        {this.state.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
          }
      </div>
    );
  }
}
export default App;
