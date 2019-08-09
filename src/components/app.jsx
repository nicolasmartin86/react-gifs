import React, { Component } from 'react';
import SearchBar from '../components/search_bar.jsx';
import Gif from '../components/gif.jsx';
import ListOfGifs from '../components/list_of_gifs.jsx';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      gifSelected: "ZZiLDJ98R2GOY"
    };
  }

  apiSearch = (query) => {
    giphy('rzIovf2yTkQjfmY8PmaETSLjtnTFFimI').search(
      {
        q: query,
        rating: 'g',
        limit: 5
      },
    (error, result) => {
      this.setState({gifs: result.data});
    }
    );
  }

  updateGifSelected = (clicked) => {
    this.setState({gifSelected: clicked});
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar apiSearch={this.apiSearch}/>
          <div className="selected-gif">
            <Gif id={this.state.gifSelected} />
          </div>
        </div>
        <div className="right-scene">
          <ListOfGifs gifs={this.state.gifs} updateGifSelected={this.updateGifSelected} />
        </div>
      </div>
    );
  }

}

export default App;
