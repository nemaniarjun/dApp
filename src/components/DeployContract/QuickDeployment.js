import { Alert, Button, Col, Form, Row } from 'antd';
import React, { Component } from 'react';

import { DeployStep } from './Steps';
import Field from './DeployContractField';
import GasPriceField from '../GasPriceField';

const formButtonLayout = {
  xl: {
    span: 10
  },
  md: {
    span: 12
  },
  xs: {
    span: 24
  }
};

const formItemFullColLayout = {
  xs: {
    span: 24
  }
};

const formItemColLayout = {
  lg: {
    span: 12
  },
  xs: {
    span: 24
  }
};

const parentColLayout = {
  xxl: {
    span: 10
  },
  xl: {
    span: 12
  },
  md: {
    span: 14
  },
  xs: {
    span: 24
  }
};

function ContractFormRow(props) {
  return (
    <Row type="flex" justify="center" gutter={16} {...props}>
      {props.children}
    </Row>
  );
}

function ContractFormCol(props) {
  return (
    <Col {...formItemColLayout} {...props}>
      {props.children}
    </Col>
  );
}

function ContractFormFullWidthCol(props) {
  return (
    <Col {...formItemFullColLayout} {...props}>
      {props.children}
    </Col>
  );
}

/**
 * Component for deploying Contracts Quickly.
 *
 */
class QuickDeployment extends Component {
  handleDeploy(event) {
    if (event) event.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const values = {
        ...fieldsValue,
        expirationTimeStamp: Math.floor(
          fieldsValue['expirationTimeStamp'].valueOf() / 1000
        )
      };
      window.scrollTo(0, 0);
      this.props.onDeployContract(values);
    });
  }

  isSubmitDisabled() {
    if (this.props.loading) return true;

    const errors = this.props.form.getFieldsError();
    return Object.keys(errors).some(field => errors[field]);
  }

  handleModeSwitching(e) {
    e.preventDefault();
    this.props.switchMode('guided');
  }

  render() {
    const {
      form,
      gas,
      initialValues,
      loading,
      network,
      currentStep
    } = this.props;

    const quickForm = (
      <div>
        <Alert
          style={{ textAlign: 'center' }}
          banner
          type="info"
          showIcon={false}
          message={
            <span>
              First time deploying a Contract? Try the{' '}
              <a
                className="switch-mode-link"
                href={this.props.guidedModeUrl}
                onClick={this.handleModeSwitching.bind(this)}
              >
                guided mode
              </a>.
            </span>
          }
        />
        <div className="page">
          <h1 className="text-center">Quick Deploy Contracts</h1>
          <Row type="flex" justify="center">
            <Col
              {...parentColLayout}
              className="deploy-contract-container quick-deploy"
            >
              <Form
                onSubmit={this.handleDeploy.bind(this)}
                layout="vertical"
                style={{ overflowX: 'hidden' }}
              >
                <ContractFormRow>
                  <ContractFormFullWidthCol>
                    <Field
                      name="contractName"
                      initialValue={initialValues.contractName}
                      form={form}
                      showHint
                    />
                  </ContractFormFullWidthCol>

                  <ContractFormFullWidthCol>
                    <Field
                      name="collateralTokenAddress"
                      initialValue={initialValues.collateralTokenAddress}
                      form={form}
                      showHint
                    />
                  </ContractFormFullWidthCol>
                </ContractFormRow>

                <ContractFormRow>
                  <ContractFormCol>
                    <Field
                      name="priceFloor"
                      initialValue={
                        isNaN(initialValues.priceFloor)
                          ? ''
                          : parseInt(initialValues.priceFloor, 10)
                      }
                      form={form}
                      showHint
                    />
                  </ContractFormCol>

                  <ContractFormCol>
                    <Field
                      name="priceCap"
                      initialValue={
                        isNaN(initialValues.priceCap)
                          ? ''
                          : parseInt(initialValues.priceCap, 10)
                      }
                      form={form}
                      showHint
                    />
                  </ContractFormCol>
                </ContractFormRow>

                <ContractFormRow>
                  <ContractFormCol>
                    <Field
                      name="priceDecimalPlaces"
                      initialValue={
                        isNaN(initialValues.priceDecimalPlaces)
                          ? ''
                          : parseInt(initialValues.priceDecimalPlaces, 10)
                      }
                      form={form}
                      showHint
                    />
                  </ContractFormCol>

                  <ContractFormCol>
                    <Field
                      name="qtyMultiplier"
                      initialValue={
                        isNaN(initialValues.qtyMultiplier)
                          ? ''
                          : parseInt(initialValues.qtyMultiplier, 10)
                      }
                      form={form}
                      showHint
                    />
                  </ContractFormCol>
                </ContractFormRow>

                <ContractFormRow>
                  <ContractFormCol>
                    <Field
                      name="expirationTimeStamp"
                      initialValue={initialValues.expirationTimeStamp}
                      form={form}
                      showHint
                    />
                  </ContractFormCol>

                  <ContractFormCol>
                    <Field
                      name="oracleDataSource"
                      initialValue={initialValues.oracleDataSource}
                      form={form}
                      showHint
                    />
                  </ContractFormCol>
                </ContractFormRow>

                <ContractFormRow>
                  <ContractFormFullWidthCol>
                    <Field
                      name="oracleQuery"
                      initialValue={initialValues.oracleQuery}
                      form={form}
                      showHint
                    />
                  </ContractFormFullWidthCol>
                </ContractFormRow>

                <ContractFormRow>
                  <ContractFormFullWidthCol>
                    <GasPriceField
                      form={form}
                      gaslimit={gas}
                      location={this.props.location}
                      network={network}
                    />
                  </ContractFormFullWidthCol>
                </ContractFormRow>

                <Row type="flex" justify="center">
                  <Col {...formButtonLayout}>
                    <Button
                      className="submit-button"
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      disabled={this.isSubmitDisabled()}
                      style={{ width: '100%' }}
                    >
                      Deploy Contract
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    );

    return (
      <div>
        {/* show form if contract is not deploying */}
        <div
          style={{
            opacity: null === currentStep ? 1 : 0,
            height: null === currentStep ? 'auto' : 1
          }}
        >
          {quickForm}
        </div>

        {/* show contract deployment flow if contract is deploying */
        null === currentStep ? null : (
          <div className="page">
            <Row type="flex" justify="center" style={{ margin: '20px 0' }}>
              <Col span={18}>
                <DeployStep
                  network={this.props.network}
                  containerStyles={{ padding: '20px 10px 20px 10px' }}
                  history={this.props.history}
                  showErrorMessage={this.props.showErrorMessage}
                  showSuccessMessage={this.props.showSuccessMessage}
                  onDeployContract={this.handleDeploy.bind(this)}
                  onResetDeploymentState={this.props.onResetDeploymentState}
                  loading={this.props.loading}
                  contract={this.props.contract}
                  error={this.props.error}
                  currentStep={this.props.currentStep}
                  contractDeploymentTxHash={this.props.contractDeploymentTxHash}
                  collateralPoolDeploymentTxHash={
                    this.props.collateralPoolDeploymentTxHash
                  }
                />
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default Form.create()(QuickDeployment);
