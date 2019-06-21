import React, { Component } from 'react';

class ListOfGifs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.props.gifs.map((gif) => {
      return <Gif id={gif.id} />
    });
  }
}

export default ListOfGifs;
