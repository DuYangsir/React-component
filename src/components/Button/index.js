import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index'
import './style.less'

function noop() {}

class Button extends Component {
  render() {
    const {
      children,
      type,
      size,
      className,
      icon,
      onClick,
      disabled
    } = this.props

    return (
      <a
        className={`pf-button pf-button-${type} ${
          disabled ? 'is-disabled' : ''
        } pf-button-${size} ${className}`}
        onClick={disabled ? noop : onClick}
      >
        {icon ? <Icon name={icon} /> : null}
        <span>{children}</span>
      </a>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  icon: '',
  type: 'primary',
  size: 'large',
  disabled: false,
  onClick: noop
}

export default Button
