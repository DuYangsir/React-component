import React, { Component } from 'react'
import { Switch } from '../../components/index'

export default class SwitchDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switchChecked: false
    }
  }
  handleClick = val => {
    this.setState({
      switchChecked: val
    })
  }
  render() {
    const { switchChecked } = this.state
    return (
      <div>
        <ul>
          <li>
            <Switch checked={true} />
          </li>
          <li>
            <Switch checked={switchChecked} onClick={this.handleClick} />
          </li>
          <li>
            <Switch
              checked={switchChecked}
              color="red"
              onClick={this.handleClick}
            />
          </li>
          <li>
            <Switch checked={false} disabled />
          </li>
        </ul>
      </div>
    )
  }
}
