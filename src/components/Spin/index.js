import React, { Component } from 'react'
import Icon from '../Icon/index'
import './style.less'

export default class Spin extends Component {
  render() {
    const { SpinPreCls } = this.props
    return (
      <div className={SpinPreCls}>
        <div className={`${SpinPreCls}-icon-box`}>
          <span className={`${SpinPreCls}-icon`}>
            <Icon name="loading1" />
          </span>
        </div>
        <div className={`${SpinPreCls}-mask`} />
      </div>
    )
  }
}

Spin.defaultProps = {
  SpinPreCls: 'pf-spin'
}
