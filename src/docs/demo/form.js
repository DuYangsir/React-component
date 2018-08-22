import React, { Component } from 'react'
import { createForm } from 'rc-form'
import { List, InputItem, Button, WhiteSpace } from '../../components/index'
import './form.less'

const Item = List.Item

class FormDemo extends Component {
  state = {
    formValue: {}
  }
  handleSubmit = () => {
    this.props.form.validateFields((error, formValue) => {
      console.log(error, formValue)
      if (!error) {
        this.setState({
          formValue
        })
      }
    })
  }
  render() {
    const { formValue } = this.state
    const { getFieldProps, getFieldError } = this.props.form

    return (
      <div className="main-form">
        <List renderHeader={() => 'form表单示例'}>
          <InputItem
            {...getFieldProps('fundName')}
            label="基金名称"
            placeholder="请输入6位以内的名称"
          />
        </List>
        <WhiteSpace size="lg" />
        <Button
          type="primary"
          className="submit-button"
          onClick={this.handleSubmit}
        >
          提交
        </Button>

        <WhiteSpace size="xl" />
        <List renderHeader={() => '提交后详情展示'}>
          <Item extra={formValue.fundName || ''}>基金名称</Item>
        </List>
      </div>
    )
  }
}

export default createForm()(FormDemo)
