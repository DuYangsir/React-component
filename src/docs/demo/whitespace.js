import React, { Component } from 'react'
import { WhiteSpace } from '../../components/index'

export default class WhiteSpaceDemo extends Component {
  render() {
    const styles = {
      backgroundColor: '#ddd',
      textAlign: 'center',
      color: '#888'
    }
    return (
      <div>
        <h3 style={styles}>test</h3>
        <WhiteSpace size="xs" />
        <h3 style={styles}>test</h3>
        <WhiteSpace size="sm" />
        <h3 style={styles}>test</h3>
        <WhiteSpace size="md" />
        <h3 style={styles}>test</h3>
        <WhiteSpace size="lg" />
        <h3 style={styles}>test</h3>
        <WhiteSpace size="xl" />
        <h3 style={styles}>test</h3>
      </div>
    )
  }
}
