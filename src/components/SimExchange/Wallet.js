import React, { Component } from 'react';
import { Tabs } from 'antd';

import HeaderMenu from './Wallet/HeaderMenu';
import Table from './Wallet/Table';

import '../../less/SimExchange/Wallet.less';

const TabPane = Tabs.TabPane;

class Wallet extends Component {
  render() {
    return (
      <div className="sim-ex-container">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Wallet" key="1">
            <HeaderMenu {...this.props} />
          </TabPane>
          <TabPane tab="History" key="2">
            <Table {...this.props} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Wallet;
