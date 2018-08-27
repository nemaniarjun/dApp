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
        <Table
          dataSource={[]}
          columns={columns}
          pagination={false}
          scroll={{ y: 700 }}
        />
      </div>
    );
  }
}

export default Trades;
