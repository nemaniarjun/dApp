import React, { Component } from 'react';

import Header from '../Header';

class Chart extends Component {
  render() {
    return (
      <div>
        <Header name="Trade Charts" />
        <div className="sim-ex-container-with-header">
          <p>Charts and stuff understood by pros goes here</p>
        </div>
      </div>
    );
  }
}

export default Chart;
