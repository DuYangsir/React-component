import React, { Component } from 'react'
import { Button, WhiteSpace } from '../../components/index'

export default class ButtonDemo extends Component {
  render() {
    return (
      <div style={{ padding: '15px' }}>
        <Button>主按钮</Button>
        <WhiteSpace />
        <Button type="primary">主按钮</Button>
        <WhiteSpace />
        <Button type="success">主按钮</Button>
        <WhiteSpace />
        <Button type="warning">主按钮</Button>
        <WhiteSpace />
        <Button type="error">主按钮</Button>
        <WhiteSpace />
        <Button disabled>主按钮</Button>
        <WhiteSpace />
        <Button type="primary" size="mini">
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="success" size="mini">
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="warning" size="mini">
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="error" size="mini">
          主按钮
        </Button>
        <WhiteSpace />
        <Button type="primary" block>
          主按钮
        </Button>
        <WhiteSpace />
        <Button icon="check-circle">主按钮</Button>
        <WhiteSpace />
        <Button type="primary" icon="check-circle">
          主按钮
        </Button>
      </div>
    )
  }
}
