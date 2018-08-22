import React, { Component } from 'react';

import FillOrder from './FillOrder';
import { Tabs } from 'antd';
import OpenOrders from './OpenOrders';
import Positions from './Positions';

const TabPane = Tabs.TabPane;

class Index extends Component {
  render() {
    return (
      <div className="sim-ex-container m-top-10">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Open Orders" key="1">
            <OpenOrders />
          </TabPane>
          <TabPane tab="Positions" key="2">
            <Positions />
          </TabPane>
          <TabPane tab="Fills" key="3">
            <FillOrder {...this.props} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Index;
