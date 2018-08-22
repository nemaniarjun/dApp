import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { Route, Redirect, Switch, withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import TopBar from './TopBar';
import Trades from './Trades';
import Wallet from './Wallet';
import FillOrder from './FillOrder';

import '../../less/SimExchange.less';

class SimExchange extends Component {
  componentDidMount() {
    if (!this.props.contracts) {
      this.props.getContracts();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.contracts && !this.props.contract) {
      this.props.selectContract(this.props.contracts[0]);
    }
  }

  render() {
    const { asks, bids, contract, contracts, location } = this.props;

    if (!this.props.shouldRender) {
      return (
        <div
          className="text-center"
          style={{ fontSize: '18px', padding: '4em' }}
        >
          <strong>Coming soon...</strong>
        </div>
      );
    }

    return (
      <div style={{ padding: '15px' }}>
        <Row type="flex" justify="space-between" className="contract-data">
          <TopBar
            contract={contract}
            contracts={contracts}
            onSelectContract={this.props.selectContract}
          />
        </Row>
        <Row type="flex" justify="space-between">
          <Col span={5}>
            <Wallet {...this.props} />
          </Col>
          <Col span={5}>
            <Trades {...this.props} asks={asks} bids={bids} />
          </Col>
          <Col span={8}>
            <FillOrder {...this.props} />
          </Col>
          <Col span={6}>col-4</Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(SimExchange);
