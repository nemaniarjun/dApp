import React, { Component } from 'react';
import { Form as AntForm, Input, Button, Row, Col } from 'antd';

import widthdrawIcon from '../../../img/icons/corner-left-up.svg';

const FormItem = AntForm.Item;

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hasErrors = this.hasErrors.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.form.validateFields();
    });
  }

  handleSubmit(type) {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showModal();
        this.props.onSubmit({ ...values, type: type });
      }
    });
  }

  onClickSubmit(type) {
    this.handleSubmit(type);
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const { form } = this.props;

    const {
      getFieldDecorator,
      getFieldError,
      isFieldTouched,
      getFieldsError
    } = form;

    const numberError = isFieldTouched('number') && getFieldError('number');

    return (
      <AntForm className="m-top-20">
        <FormItem
          validateStatus={numberError ? 'error' : ''}
          help={numberError || ''}
          className="m-bottom-15"
        >
          {getFieldDecorator('number', {
            rules: [{ required: true, message: 'Please enter a number' }]
          })(
            <Input
              addonAfter={this.props.collateralToken}
              type="number"
              min="0"
              step="0.001"
              placeholder="10.000"
              size="small"
            />
          )}
        </FormItem>
        <Row type="flex">
          <Col span={12} style={{ paddingRight: '5px' }}>
            <Button
              disabled={this.hasErrors(getFieldsError())}
              onClick={this.onClickSubmit.bind(this, 'deposit')}
              type="primary"
              style={{ width: '100%' }}
              className="sim-ex-action-btn"
            >
              <img
                alt="Deposit"
                src={widthdrawIcon}
                style={{
                  opacity: this.hasErrors(getFieldsError()) ? '0.2' : '1'
                }}
              />
              Deposit
            </Button>
          </Col>
          <Col span={12} style={{ paddingLeft: '5px' }}>
            <Button
              disabled={this.hasErrors(getFieldsError())}
              onClick={this.onClickSubmit.bind(this, 'widthdraw')}
              type="primary"
              style={{ width: '100%' }}
              className="sim-ex-action-btn"
            >
              Widthdraw
              <img
                alt="Widthdraw"
                src={widthdrawIcon}
                style={{
                  opacity: this.hasErrors(getFieldsError()) ? '0.2' : '1',
                  transform: 'scaleX(-1) scaleY(-1)'
                }}
              />
            </Button>
          </Col>
        </Row>
      </AntForm>
    );
  }
}

const WrappedForm = AntForm.create({
  mapPropsToFields({ amount }) {
    return {
      number: AntForm.createFormField({
        value: amount && amount.value
      })
    };
  }
})(Form);

export default WrappedForm;
