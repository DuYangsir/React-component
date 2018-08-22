import React, { Component } from 'react'
import { Tabs } from '../../components/index'
export default class BasicDemo extends Component {
  render() {
    const pStyle = { margin: 0, padding: 10 }
    const tabData = [
      { title: 'First Tab', name: '1' },
      { title: 'Second Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' },
      { title: 'Third Tab', name: '1' }
    ]

    return (
      <div style={{height:'400'}}>
      <Tabs
        tabs={tabData}
        animated={true}
        initialPage={0}
        renderTabBar={props => (
          <Tabs.DefaultTabBar {...props} page={4}>
            <div>{props.title}</div>
          </Tabs.DefaultTabBar>
        )}
      >
        <div style={{ background: '#CCFFFF' }}>
          <p style={pStyle}>tab 1 1</p>
          <p style={pStyle}>tab 1 2</p>
          <p style={pStyle}>tab 1 3</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
          <p style={pStyle}>tab 1 4</p>
        </div>
        <div
          style={{ background: '#00CCFF', overflow: 'hidden', height: '100%' }}
        >
          <canvas ref={this.canvasTest} style={{ height: 200 }} />
        </div>
        <div
          style={{ background: '#0099FF', overflow: 'hidden', height: '100%' }}
        >
          <p style={pStyle}>tab 3 1</p>
          <p style={pStyle}>tab 3 2</p>
        </div>
      </Tabs>
      </div>
    )
  }
}
