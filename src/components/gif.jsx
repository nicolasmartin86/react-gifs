import React, { Component } from 'react';

class Gif extends Component {

  constructor(props) {
    super(props);
    // this.state = { clicked: false };
  }

  // handleClick = () => {
  //   this.setState({clicked: !this.state.clicked })
  // }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return(<img src={src} alt="" className="gif" data-id={this.props.id}/>);
  }
}

export default Gif;
