import React, { Component } from 'react'
import { List } from '../components/index'

const Item = List.Item

export default class App extends Component {
  render() {
    return (
      <div>
        <List
          renderHeader={() => '优优私募移动web项目组件'}
          renderFooter={() => '优优私募移动web项目组件'}
        >
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('button')
            }}
          >
            Button
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('switch')
            }}
          >
            Switch
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('input')
            }}
          >
            InputItem
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('form')
            }}
          >
            Forms
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('list')
            }}
          >
            List
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('listview')
            }}
          >
            ListView
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('flex')
            }}
          >
            Flex
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('empty')
            }}
          >
            Empty
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('whitespace')
            }}
          >
            WhiteSpace
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('wingspace')
            }}
          >
            Wingspace
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('checkbox')
            }}
          >
            Checkbox
          </Item>
          <Item
            leftIcon="right"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('tabs')
            }}
          >
            Tabs
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('imagepicker')
            }}
          >
            ImagePicker
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('message')
            }}
          >
            Message
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('spin')
            }}
          >
            Loading
          </Item>
          <Item
            leftIcon="right"
            leftIconColor="#6abf47"
            extra="详情"
            arrow
            onClick={() => {
              this.props.history.push('screen')
            }}
          >
            screen
          </Item>
        </List>
      </div>
    )
  }
}
