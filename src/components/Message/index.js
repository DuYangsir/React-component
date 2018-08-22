import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index'
import './style.less'

function noop() {}

class Message extends Component {
  render() {
    const { children, icon, color, backgroundColor, onClick } = this.props
    return (
      <div className="pf-message" style={{ color, backgroundColor }}>
        <Icon name={icon} className="pf-message-icon" color={color} />
        {children}
        <Icon
          name="close"
          className="pf-message-close"
          color={color}
          onClick={onClick}
        />
      </div>
    )
  }
}

Message.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func
}

Message.defaultProps = {
  mode: 'closed',
  color: '#f76a24',
  backgroundColor: '#fefcec',
  onClick: noop
}

export default Message
