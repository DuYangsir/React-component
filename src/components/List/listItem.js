import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/index'
import './listItem.less'

function noop() {}

class ListItem extends Component {
  render() {
    const {
      extra,
      children,
      arrow,
      long,
      onClick,
      leftIcon,
      leftIconColor
    } = this.props

    const listInlineClassName = classNames('pf-list-inline', {
      [`pf-list-inline-long`]: long
    })

    const extraClassName = classNames('pf-list-extra', {
      [`pf-list-extra-fix`]: leftIcon
    })

    return (
      <div className="pf-list-item" onClick={onClick}>
        <div className={listInlineClassName}>
          {leftIcon ? (
            <Icon
              name={leftIcon}
              color={leftIconColor}
              className="pf-list-image-left"
            />
          ) : null}
          <div className="pf-list-content">{children}</div>
          {extra ? <div className={extraClassName}>{extra}</div> : null}
          {arrow ? (
            <div className="pf-list-arrow">
              <Icon name="enter" />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

ListItem.propTypes = {
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  long: PropTypes.bool,
  arrow: PropTypes.bool,
  onClick: PropTypes.func,
  leftIcon: PropTypes.string,
  leftIconColor: PropTypes.string
}

ListItem.defaultProps = {
  extra: '',
  long: false,
  arrow: false,
  onClick: noop,
  leftIcon: ''
}

export default ListItem
