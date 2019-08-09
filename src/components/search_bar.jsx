import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    this.props.apiSearch(event.target.value);
  }

  render() {
    return <input type="text" className="form-control form-search" onChange={this.handleUpdate} />
  }
}

export default SearchBar;
