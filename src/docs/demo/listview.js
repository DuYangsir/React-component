import React, { Component } from 'react'
import { ListView } from '../../components/index'
import sources from '../../components/ListView/data'
import './listview.less'

class ListViewDemo extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      dataSource,
      listData: [],
      isLoading: true,
      height: document.documentElement.clientHeight
    }
  }

  componentDidMount() {
    document.body.style.overflowY = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod/i
    )
      ? 'hidden'
      : 'auto'

    // simulate initial Ajax
    this.getRequestData()
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.listData),
        isLoading: false
      })
    }, 600)
  }

  getRequestData() {
    const listData = this.state.listData.concat(sources)
    this.setState({
      listData
    })
  }

  onEndReached = event => {
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    this.setState({ isLoading: true })
    this.getRequestData()
    setTimeout(() => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.listData),
        isLoading: false
      })
    }, 2000)
  }

  render() {
    const { onEndReached } = this
    const { height, isLoading, dataSource } = this.state

    // 头模板
    const headerRender = () => (
      <div className="cstm-list-header">
        <span className="cstm-list-header-col1">产品名称</span>
        <span className="cstm-list-header-col2">最新净值</span>
        <span className="cstm-list-header-col3">今年以来</span>
      </div>
    )

    // 行模板
    const rowRender = rowItem => (
      <div className="cstm-list-view-item">
        <span className="cstm-list-item-main">
          <span className="cstm-list-item-title">{rowItem.SecurityName}</span>
          <span className="cstm-list-item-subtitle">
            {rowItem.StrategyName}
          </span>
        </span>
        <span className="cstm-list-item-col1">{rowItem.PerANV}</span>
        <span className="cstm-list-item-col2">{rowItem.AccuChg}</span>
      </div>
    )

    return (
      <div className="pf-list-view">
        <ListView
          dataSource={dataSource}
          isLoading={isLoading}
          height={height}
          renderHeader={headerRender}
          renderRow={rowData => rowRender(rowData)}
          onEndReached={onEndReached}
        />
      </div>
    )
  }
}

export default ListViewDemo
