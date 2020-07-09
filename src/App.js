import React, { Component } from 'react';  
import './App.css';
import 'bulma/css/bulma.css';
import { Title }  from './component/title';
import { SearchForm } from './component/search-form';


class App extends Component {
  state = { results: [] };

  _handleResults = (results) =>{
    this.setState({ results });
  }

  _renderResults () {
    const {results} = this.state

    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render(){
    return (
      <div className="App">
        <Title>Search your movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResult={this._handleResults} />
        </div>
        <div>
          {this.state.results.length === 0 
            ? <p>Sin Resultados</p> 
            : this._renderResults()
          }
        </div>
      </div>
    );
  }
}
export default App;
