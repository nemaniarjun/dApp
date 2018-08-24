import React, { Component } from 'react';
import { Tabs } from 'antd';

import HeaderMenu from './Wallet/HeaderMenu';
import Table from './Wallet/Table';

import '../../less/SimExchange/Wallet.less';

const TabPane = Tabs.TabPane;

class Wallet extends Component {
  render() {
    return (
      <div className="sim-ex-container" id="wallet">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Wallet" key="1">
            <HeaderMenu {...this.props} />
          </TabPane>
          <TabPane tab="History" key="2">
            <div className="sim-ex-inner-container" style={{ paddingTop: '0' }}>
              <Table {...this.props} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Wallet;
