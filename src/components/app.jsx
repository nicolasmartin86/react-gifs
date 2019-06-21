import React, { Component } from 'react';
import SearchBar from '../components/search_bar.jsx';
import Gif from '../components/gif.jsx';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="ZZiLDJ98R2GOY" />
        </div>
      </div>

      <div className="right-scene">
        <ListOfGifs />
      </div>
    </div>);
  }
}

export default App;
