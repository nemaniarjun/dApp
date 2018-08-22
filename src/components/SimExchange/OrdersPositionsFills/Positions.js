import React, { Component } from 'react';
import { Table } from 'antd';

import positionsColumns from './PositionColumns';

class Positions extends Component {
  render() {
    return <Table dataSource={[]} columns={positionsColumns} />;
  }
}

export default Positions;
