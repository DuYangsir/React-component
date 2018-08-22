import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class Empty extends Component {
  render() {
    const { text } = this.props
    return (
      <div className="pf-empty">
        <div className="pf-empty-wrapper">
          <em className="pf-empty-img" />
          <span className="pf-empty-text">{text}</span>
        </div>
      </div>
    )
  }
}

Empty.propTypes = {
  text: PropTypes.string
}

Empty.defaultProps = {
  text: '暂无数据'
}

export default Empty
