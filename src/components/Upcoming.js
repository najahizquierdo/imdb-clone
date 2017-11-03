import React, { Component } from 'react';
import Movie from './Movie'

class Upcoming extends Component {
  constructor(){
    super();
    this.state = {
    movies: []
    }
    this.fetchUpcoming = this.fetchUpcoming.bind(this);
  }
  componentDidMount(){
    this.fetchUpcoming();
  }
    fetchUpcoming(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9b953bb0dd7d798ddff785c4fd65c7cb&language=en-US&page=1')
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
      <h1> Upcoming Movies </h1>
        <div class="horizontal-scroll-wrapper squares">
      {movies.map((movie, i) => <Movie
       key={i} newMovie={movie}/>
      )}
    </div>

    </div>
    );
  }
}

export default Upcoming;
