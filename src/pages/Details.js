import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonBackToHome } from '../component/ButtonBackToHome';

const API_KEY= 'e68d08b1';

export class Detail extends Component{
    static propTypes = {
       match: PropTypes.shape({
           params: PropTypes.object,
           isExact: PropTypes.bool,
           path: PropTypes.string,
           url: PropTypes.string
       })
    }

    state = { movie : {} }
    _fetchMovie({id}) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
 
            console.log({ movie });
            this.setState({ movie })

        })
    }
    
    componentDidMount() {
        const { movieId } = this.props.match.params;
        this._fetchMovie({ id: movieId })
    }
    render(){

        const { Title, Poster, Actors, Metascore, Plot} = this.state.movie;
        return(
            <div className="tile is-ancient">
                <div className="tile is-vertical is-parent is-8-desktop is-12-tablet">
                    <div className="tile is-child">
                        <h1 className="title"><u>{Title}</u></h1>
                    </div>
                    <div className="tile is-child">
                        <h3 className="title">Actors</h3>
                        <p className="subtitle">{Actors}</p>
                    </div>
                    <div className="tile is-child">
                        <h3 className="title">Summary</h3>
                        <p className="subtitle">{Plot}</p>
                    </div>
                    <div className="tile is-child">
                        <h3 className="title">Score by Imdb</h3>
                        <p className="subtitle">{Metascore}</p>
                        <ButtonBackToHome/>
                    </div>
                </div>
                <div className="tile is-parent is-vertical">
                    <div className="tile is-child">
                        <img src={Poster} />
                    </div>
                </div>
            </div>
        )
    }
}


