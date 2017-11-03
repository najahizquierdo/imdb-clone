import React, { Component } from 'react';
import Movie from './Movie'

class Popular extends Component {
  constructor(){
    super();
    this.state = {
    movies: []
    }
    this.fetchPopular = this.fetchPopular.bind(this);
  }
  componentDidMount(){
    this.fetchPopular();
  }
    fetchPopular(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=9b953bb0dd7d798ddff785c4fd65c7cb&language=en-US&page=1')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({movies: responseJson.results});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    let {
      movies
    } = this.state
    return(
      <div>
      <h1> Popular Movies </h1>
      <div class="horizontal-scroll-wrapper squares">
      {movies.map((movie, i) => <Movie
       key={i} newMovie={movie}/>
      )}
    </div>

    </div>
    );
  }
}

export default Popular;
