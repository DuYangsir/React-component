import React, { Component } from 'react'
import Checkbox from 'rc-checkbox'
import 'rc-checkbox/assets/index.css'
import './style.less'

class CheckBox extends Component {
  render() {
    const { ...restProps } = this.props
    return <Checkbox className="pf-checkbox" {...restProps} />
  }
}

export default CheckBox
