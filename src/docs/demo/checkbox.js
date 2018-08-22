import React, { Component } from 'react'
import { Checkbox, List } from '../../components/index'

const Item = List.Item

export default class CheckboxDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: false
    }
  }
  handleChange = evt => {
    this.setState({
      isChecked: evt.target.checked
    })
  }
  render() {
    return (
      <List renderHeader={() => 'Checkbox Component'}>
        <Item extra={<Checkbox defaultChecked />}>On Default</Item>
        <Item extra={<Checkbox onChange={this.handleChange} />}>
          here is {this.state.isChecked ? 'on' : 'off'}
        </Item>
        <Item extra={<Checkbox disabled />}>Disabled</Item>
        <Item extra={<Checkbox disabled checked />}>Disabled On</Item>
      </List>
    )
  }
}
