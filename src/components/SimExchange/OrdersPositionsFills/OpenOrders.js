import React, { Component } from 'react';
import { Table } from 'antd';

import openOrderColumns from './OpenOrderColumns';

class OpenOrders extends Component {
  render() {
    return <Table dataSource={[]} columns={openOrderColumns} />;
  }
}

export default OpenOrders;
