import React, { Component } from 'react';
import Gif from './gif.jsx';

class ListOfGifs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedGif: null
    };
  }

  handleClickedGif = (event) => {
    this.props.updateGifSelected(event.target.dataset.id);
  }


  renderList = () => {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} key={gif.id} />
    });
  }

  render() {
    return(
      <div className="gif-list" onClick={this.handleClickedGif}>
        {this.renderList()}
      </div>
    );
  }
}

export default ListOfGifs;
