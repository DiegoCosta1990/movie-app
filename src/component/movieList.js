import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Movie } from './movie';

export class MoviesList extends Component {
    static propTypes = {
        movie: PropTypes.array
    }
    render() {
        const { movies } = this.props

        return (
            <div className="MoviesList columns"> {
                movies.map(movie => {
                    return (
                        <div key={movie.imdbID} className="MoviesList-item column is-3-desktop is-6-tablet is-12-mobile">
                            <Movie
                                id={movie.imdbID}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                            />
                        </div>
                    )
                })
            }
            </div>
        )
    }    
}   