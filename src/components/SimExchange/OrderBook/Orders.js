import React, { Component } from 'react';
import { Table } from 'antd';

import columns from './Columns';
import Header from '../Header';

class Orders extends Component {
  render() {
    return (
      <div>
        <Header name="Order Book" />
        <div className="sim-ex-container-with-header">
          <Table dataSource={[]} columns={columns} />
        </div>
      </div>
    );
  }
}

export default Orders;
