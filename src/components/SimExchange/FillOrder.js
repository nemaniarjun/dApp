import '../../less/SimExchange/FillOrder.less';

import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import { MarketJS } from '../../util/marketjs/marketMiddleware';
import Header from './Header';

const { TextArea } = Input;
const FormItem = Form.Item;

class FillOrder extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.updateOrderJSON = this.updateOrderJSON.bind(this);

    this.state = {
      orderJSON: ''
    };
  }

  async onSubmit(e) {
    e.preventDefault();

    await MarketJS.tradeOrderAsync(this.state.orderJSON).then(res => {
      console.log('tradeOrderAsync', res);
    });
  }

  updateOrderJSON(e) {
    this.setState({
      orderJSON: e.target.value
    });
  }

  render() {
    return (
      <div className="m-top-10">
        <Header name="Fill Orders" />
        <div className="sim-ex-container-with-header">
          <Form onSubmit={this.onSubmit}>
            <FormItem>
              <TextArea
                placeholder="{contractAddress: &quot;0x8a9dac478c64b2c4f62e12045a9f55b4dde473b0&quot;, expirationTimestamp: BigNumber, feeRecipient: &quot;0x0000000000000000000000000000000000000000&quot;, maker: &quot;0xce5fdef0592271c41c4ac07ddb52ae3bbb3fcb9e&quot;, makerFee: BigNumber, …}"
                rows={6}
                onChange={this.updateOrderJSON}
              />
            </FormItem>

            <FormItem>
              <Button
                disabled={this.state.orderJSON === ''}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default FillOrder;
