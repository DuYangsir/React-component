import React, { Component } from 'react'
import { Message } from '../../components/index'

export default class MessageDemo extends Component {
  state = {
    isVisiable: true
  }
  handleClick = () => {
    this.setState({
      isVisiable: false
    })
  }
  render() {
    return (
      <div>
        {this.state.isVisiable ? (
          <Message icon="systemprompt" onClick={this.handleClick}>
            火速预定中
          </Message>
        ) : null}
      </div>
    )
  }
}
