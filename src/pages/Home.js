import React, { Component } from 'react';
import { Title }  from '../component/title';
import { SearchForm } from '../component/search-form';
import { MoviesList } from '../component/movieList';


export class Home extends Component {
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
        return(
            <div>
                <Title>Movie Finder</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResult={this._handleResults} placeholder="Search your movie..." />
                </div>
                {this.state.usedSearch
                    ? this._renderResults()
                    : <div className="search-caption subtitle">
                        <br/>
                        <p className="is-size-4"><i>Use the form above to search a movie</i></p>
                    </div>
                }            
            </div>
        )
    }
}