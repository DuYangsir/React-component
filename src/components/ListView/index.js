import React, { Component } from 'react'
import RListView from 'rmc-list-view'
import PropTypes from 'prop-types'
import Icon from '../Icon/index'
import './style.less'

function noop() {}

class ListView extends Component {
  static DataSource = RListView.DataSource

  render() {
    const {
      dataSource,
      isLoading,
      loadingText,
      height,
      renderRow,
      onEndReached,
      ...restProps
    } = this.props

    return (
      <div className="pf-list-view">
        <RListView
          ref={el => (this.lv = el)}
          dataSource={dataSource}
          style={{ height }}
          renderRow={renderRow}
          renderFooter={() => (
            <div className="pf-list-view-loading">
              <Icon name="loading" className="loading-animate" />
              {isLoading ? loadingText : ''}
            </div>
          )}
          onEndReached={onEndReached}
          onEndReachedThreshold={10}
          pageSize={10}
          {...restProps}
        />
      </div>
    )
  }
}

ListView.propTypes = {
  dataSource: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadingText: PropTypes.string,
  height: PropTypes.number.isRequired,
  renderHeader: PropTypes.func,
  renderRow: PropTypes.func.isRequired,
  onEndReached: PropTypes.func
}

ListView.defaultProps = {
  dataSource: [],
  isLoading: true,
  loadingText: '数据加载中',
  onEndReached: noop
}

export default ListView
