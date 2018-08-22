import React, { Component } from 'react'
import { List, InputItem } from '../../components/index'

export default class InputDeom extends Component {
  render() {
    return (
      <List renderHeader={() => '输入框'}>
        <InputItem label="账户名" placeholder="请输入卡号" maxLength={5} />
        <List.Item extra="1234567890">银行卡号</List.Item>
      </List>
    )
  }
}
