import React, { Component } from 'react';
import { Icon, Tooltip } from 'antd';

class SectionHeader extends Component {
  render() {
    return (
      <div className="sim-ex-header">
        {this.props.name}
        <Tooltip title={this.props.tooltip}>
          <Icon type="info-circle-o" className="info-icon" />
        </Tooltip>
      </div>
    );
  }
}

export default SectionHeader;
