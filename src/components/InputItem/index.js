import React, { Component } from 'react'
import classNames from 'classnames'
import './style.less'

export default class InputItem extends Component {
  state = {
    inputValue: ''
  }
  handleClear = () => {
    this.setState({
      inputValue: ''
    })
  }
  handleInput = () => {
    this.setState({
      inputValue: this.inputItem.value
    })
  }
  render() {
    const {
      inputPreCls,
      label,
      placeholder,
      maxLength,
      ...restProps
    } = this.props
    const { inputValue } = this.state

    const { name } = restProps

    const inputItemClass = classNames('pf-list-item', inputPreCls)
    const inputItemInlineClass = classNames(
      'pf-list-inline',
      `${inputPreCls}-inline`
    )
    const inputItemLabelClass = classNames(`${inputPreCls}-label`)

    return (
      <div className={inputItemClass}>
        <div className={inputItemInlineClass}>
          <label className={inputItemLabelClass}>{label}</label>
          <input
            {...restProps}
            ref={input => (this.inputItem = input)}
            type="text"
            name={name}
            maxLength={maxLength}
            className={`${inputPreCls}-input`}
            placeholder={placeholder}
            value={inputValue}
            onInput={this.handleInput}
          />
          {inputValue ? (
            <em className={`${inputPreCls}-clear`} onClick={this.handleClear} />
          ) : null}
        </div>
      </div>
    )
  }
}

InputItem.defaultProps = {
  inputPreCls: 'pf-input-item'
}
