import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="sim-ex-header">
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Header;
