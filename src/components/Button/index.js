import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
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
      disabled,
      block
    } = this.props

    const buttonClass = classNames(
      'pf-button',
      `pf-button-${type}`,
      `pf-button-${size}`,
      {
        [`is-disabled`]: disabled
      },
      {
        [`is-block`]: block
      },
      `${className}`
    )

    return (
      <a className={buttonClass} onClick={disabled ? noop : onClick}>
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
  block: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  className: '',
  icon: '',
  type: 'normal',
  size: 'large',
  disabled: false,
  block: false,
  onClick: noop
}

export default Button
