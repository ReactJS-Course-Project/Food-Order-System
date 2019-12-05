import React, { Component } from 'react';
import ToolbarItem from '../ToolbarItem/ToolbarItem';

class Seller extends Component {
  render() {
    return (
      <ToolbarItem
        title={this.props.name}
        showDropbox={this.props.items.dropbox}
        items={this.props.items.itemsList}
      />
    );
  }
}

export default Seller;
