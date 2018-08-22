import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

export default class IconFont extends Component {
  render() {
    const { className, name } = this.props
    return <i className={`iconfont icon-${name} ${className}`} />
  }
}

IconFont.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
}

IconFont.defaultProps = {
  name: '',
  className: ''
}
