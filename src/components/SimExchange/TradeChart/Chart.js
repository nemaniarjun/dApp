import React, { Component } from 'react';

import SectionHeader from '../SectionHeader';

class Chart extends Component {
  render() {
    return (
      <div className="sim-ex-container">
        <SectionHeader
          name="Trade Charts"
          tooltip="This is some stuff understood by the trading gurus"
        />
        <div className="sim-ex-inner-container">
          <p>Charts and stuff goes here</p>
        </div>
      </div>
    );
  }
}

export default Chart;
