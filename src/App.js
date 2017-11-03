import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import Upcoming from './components/Upcoming'
import Movie from './components/Movie'
import Popular from './components/Popular'
import MovieResult from './components/MovieResult'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {result: []}
    this.updateResult = this.updateResult.bind(this);
  }

updateResult(newResult) {
  this.setState({result: newResult})
}

  render() {
    return (
      <div className="App">
        <header className="top-nav">
          <h1 className="App-title"> IMDB</h1>
          <SearchBar onUpdate={this.updateResult} />
        </header>
        <div className="row">
          <div className="col1"><Upcoming /></div>
          <div className="movie-result"> <MovieResult newMovie={this.state.result}/></div>
          <div className="col3"><Popular /> </div>
        </div>
      </div>
    );
  }
}

export default App;
