import React, { Component } from 'react';
import { Table } from 'antd';

import columns from './Columns';
import SectionHeader from '../SectionHeader';

class Trades extends Component {
  render() {
    return (
      <div className="sim-ex-container">
        <SectionHeader
          name="Trade History"
          tooltip="This is the global Trading History"
        />
        <div className="sim-ex-inner-container" style={{ paddingTop: '0' }}>
          <Table dataSource={[]} columns={columns} />
        </div>
      </div>
    );
  }
}

export default Trades;
