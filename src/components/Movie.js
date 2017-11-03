import React, { Component } from 'react';
import Img from 'react-image'
import HorizontalScroll from 'react-scroll-horizontal'

class Movie extends Component {


  render() {
    let photo_url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.newMovie.poster_path}`

    return(
      <div className="movie">

        <p>{this.props.newMovie.title}</p>
        <img className="photoimg" src= {photo_url} />
        <p>{this.props.newMovie.release_date}</p>
        ___________________

      </div>
    );
  }
}
export default Movie;
