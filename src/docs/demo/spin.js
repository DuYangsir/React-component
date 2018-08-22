import React, { Component } from 'react'
import { Spin, Button, WhiteSpace, WingSpace } from '../../components/index'

export default class SpinDeom extends Component {
  state = {
    loading: false
  }
  handleLoading = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3000)
      }
    )
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Spin /> : null}
        <WhiteSpace size="xl" />
        <WingSpace size="lg">
          <Button type="primary" onClick={this.handleLoading}>
            点击出现菊花
          </Button>
        </WingSpace>
      </div>
    )
  }
}
