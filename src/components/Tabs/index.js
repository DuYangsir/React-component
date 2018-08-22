import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Tabs as RTabs, DefaultTabBar } from 'rmc-tabs'
import './style.less'
import 'rmc-tabs/assets/index.css'
function noop() {}
class Tabs extends Component {
  static DefaultTabBar = RTabs.DefaultTabBar
  render() {
    const { children, ...restProps } = this.props
    return <RTabs {...restProps}>{children}</RTabs>
  }
}

export default Tabs
