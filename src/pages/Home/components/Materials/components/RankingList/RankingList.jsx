import React, { Component } from 'react';
import { Tab, Grid, Table, Pagination } from '@icedesign/base';

const { Row, Col } = Grid;
const TabPane = Tab.TabPane;
const tabs = [
  { tab: "排名", key: "ranking", content: "这里是排名列表" },
  { tab: "我的", key: "my", content: "这里是我的列表" },
];
const dataSource = [
  { ranking: "1", name: "王小毛", score: "1380", type: "团队", change: "up" },
  { ranking: "2", name: "帮推客战队", score: "1200", type: "团队", change: "no_change" },
  { ranking: "3", name: "星球公司", score: "1140", type: "个人", change: "down" },
  { ranking: "4", name: "一", score: "900", type: "个人", change: "up" },
  { ranking: "5", name: "二", score: "700", type: "团队", change: "down" },
];
const myDataSource = [
  { ranking: "3", name: "王小毛", score: "1380", type: "团队", change: "up" },
  { ranking: "56", name: "帮推客战队", score: "1200", type: "团队", change: "no_change" },
  { ranking: "190", name: "星球公司", score: "1140", type: "个人", change: "down" },
];

export default class RankingList extends Component {
  static displayName = 'RankingList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleChange(key) {
    console.log("change", key);
  }
  
  handleClick(key) {
    console.log("click", key);
  }

  handlePageChange(current) {
    console.log(current)
  }

  nameRender(value, index, record) {
    let column = record.ranking + '.' + record.name
    return column;
  }

  render() {
    let _this = this;
    return (
      <Tab onChange={this.handleChange}>
        {tabs.map(function(item) {
          if (item.key == 'ranking') {
            return <TabPane key={item.key} tab={item.tab}>
              <Table dataSource={dataSource} hasBorder={false}>
                <Table.Column title="名称" dataIndex="name" cell={_this.nameRender} />
                <Table.Column title="分数" dataIndex="score" />
                <Table.Column title="类型" dataIndex="type" />
                <Table.Column title="变化" dataIndex="change" />
              </Table>
              <Pagination style={{ textAlign: 'center' }} shape="no-border" type="simple" onChange={_this.handlePageChange} />
            </TabPane>
          } else {
            return <TabPane key={item.key} tab={item.tab}>
              <Table dataSource={myDataSource} hasBorder={false}>
                <Table.Column title="名称" dataIndex="name" cell={_this.nameRender} />
                <Table.Column title="分数" dataIndex="score" />
                <Table.Column title="类型" dataIndex="type" />
                <Table.Column title="变化" dataIndex="change" />
              </Table>
              <Pagination style={{ textAlign: 'center' }} shape="no-border" type="simple" onChange={_this.handlePageChange} />
            </TabPane>
          }
        })}
      </Tab>
    );
  }
}

