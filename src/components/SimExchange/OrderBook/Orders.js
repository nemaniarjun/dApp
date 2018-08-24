import React, { Component } from 'react';
import { Table } from 'antd';

import columns from './Columns';
import SectionHeader from '../SectionHeader';

class Orders extends Component {
  render() {
    return (
      <div className="sim-ex-container">
        <SectionHeader name="Order Book" tooltip="This is your Order Book" />
        <div className="sim-ex-inner-container" style={{ paddingTop: '0' }}>
          <Table
            dataSource={[]}
            columns={columns}
            scroll={{ y: 600 }}
            pagination={{ pageSize: 25 }}
          />
        </div>
      </div>
    );
  }
}

export default Orders;
