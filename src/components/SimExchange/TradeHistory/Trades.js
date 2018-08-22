import React, { Component } from 'react';
import { Table } from 'antd';

import columns from './Columns';
import Header from '../Header';

class Trades extends Component {
  render() {
    return (
      <div>
        <Header name="Trade History" />
        <div className="sim-ex-container-with-header">
          <Table dataSource={[]} columns={columns} />
        </div>
      </div>
    );
  }
}

export default Trades;
