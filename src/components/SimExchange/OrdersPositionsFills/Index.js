import React, { Component } from 'react';

import FillOrder from './FillOrder';
import { Icon, Tabs, Tooltip } from 'antd';
import OpenOrders from './OpenOrders';
import Positions from './Positions';

const TabPane = Tabs.TabPane;

class Index extends Component {
  render() {
    return (
      <div className="sim-ex-container m-top-10" id="order-positions-fills">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                Open Orders
                <Tooltip title="This is your Open Orders">
                  <Icon type="info-circle-o" className="info-icon" />
                </Tooltip>
              </span>
            }
            key="1"
          >
            <div className="sim-ex-inner-container" style={{ paddingTop: '0' }}>
              <OpenOrders />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                Positions
                <Tooltip title="This is your Positions">
                  <Icon type="info-circle-o" className="info-icon" />
                </Tooltip>
              </span>
            }
            key="2"
          >
            <div className="sim-ex-inner-container" style={{ paddingTop: '0' }}>
              <Positions />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                Fills
                <Tooltip title="This is your Fills">
                  <Icon type="info-circle-o" className="info-icon" />
                </Tooltip>
              </span>
            }
            key="3"
          >
            <div className="sim-ex-inner-container">
              <FillOrder {...this.props} />
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Index;
