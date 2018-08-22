import React, { Component } from 'react'
import { List } from '../../components/index'

const Item = List.Item

export default class ListDemo extends Component {
  render() {
    const description =
      '东方财富网创办于2004年,始终坚持“用户为王”的经营理念，为全国广大投资者提供专业、及时、全面的金融信息服务。2010年3月，东方财富网成功登陆深圳证券交易所，从创立到成功上市，公司只用了5年时间，成为中国创业板IPO历程上的一颗耀眼明星。'
    return (
      <div>
        <h3 className="title">基本</h3>
        <List
          renderHeader={() => '公司信息'}
          renderFooter={() => '以上信息仅供参考'}
        >
          <Item extra="前海天下资本管理">基金公司</Item>
          <Item arrow>产品经理</Item>
          <Item extra="备案号、成立日期、投资顾问" arrow>
            产品基本要素
          </Item>
          <Item extra="认购起点、费率等情况" arrow>
            认购信息
          </Item>
          <Item extra={description} long>
            公司介绍
          </Item>
        </List>
      </div>
    )
  }
}
