import React, { Component } from 'react';
import { Tab, Grid, Table, Pagination, Dialog } from '@icedesign/base';

const { Row, Col } = Grid;
const TabPane = Tab.TabPane;
const tabs = [
  { tab: "排名", key: "ranking", content: "这里是排名列表" },
  { tab: "我的", key: "my", content: "这里是我的列表" },
];
const dataSource = [
  { id: 1, ranking: 1, name: "王小毛", score: "1380", type: "团队", change: "up", number_of_people: 100, desc:"王小毛王小毛王小毛" },
  { id: 2, ranking: 2, name: "帮推客战队", score: "1200", type: "团队", change: "no_change", number_of_people: 100, desc:"帮推客战队帮推客战队帮推客战队" },
  { id: 3, ranking: 3, name: "星球公司", score: "1140", type: "个人", change: "down", number_of_people: 1 },
  { id: 4, ranking: 4, name: "一", score: "900", type: "个人", change: "up", number_of_people: 1 },
  { id: 5, ranking: 5, name: "二", score: "700", type: "团队", change: "down", number_of_people: 100, desc:"二二二二二二二二" },
  { id: 6, ranking: 6, name: "小毛", score: "1380", type: "团队", change: "up", number_of_people: 100, desc:"小毛小毛小毛小毛小毛小毛小毛" },
  { id: 7, ranking: 7, name: "推客战队", score: "1200", type: "团队", change: "no_change", number_of_people: 100, desc:"推客战队推客战队推客战队推客战队" },
  { id: 8, ranking: 8, name: "球公司", score: "1140", type: "个人", change: "down", number_of_people: 1 },
  { id: 9, ranking: 9, name: "三", score: "900", type: "个人", change: "up", number_of_people: 1 },
  { id: 10, ranking: 10, name: "四", score: "700", type: "团队", change: "down", number_of_people: 100, desc:"四四四四四四四四" },
];
const myDataSource = [
  { ranking: "3", name: "王小毛", score: "1380", type: "团队", change: "up", number_of_people: 100, desc:"王小毛王小毛王小毛" },
  { ranking: "56", name: "帮推客战队", score: "1200", type: "团队", change: "no_change", number_of_people: 100, desc:"帮推客战队帮推客战队帮推客战队" },
  { ranking: "190", name: "星球公司", score: "1140", type: "个人", change: "down", number_of_people: 1 },
];
const teamLogo = "/public/images/team_logo.jpg";

export default class RankingList extends Component {
  static displayName = 'RankingList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visibleTeamInfo: false,
      teamInfo: {
        ranking: 1,
        score: 0,
        number_of_people: 0,
        name: "未定义",
        desc: "",
        type: "个人",
      }
    };
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

  onTeamInfoOpen(record) {
    console.log(record)
    this.setState({
      visibleTeamInfo: true,
      teamInfo: {
        ranking: record.ranking,
        score: record.score,
        number_of_people: record.number_of_people,
        name: record.name,
        desc: record.desc,
        type: record.type,
      }
    });
  };

  onTeamInfoClose = () => {
    this.setState({
      visibleTeamInfo: false
    });
  };

  render() {
    let _this = this;
    let footer = ( <a /> );
    return (
      <div>
        <Tab onChange={this.handleChange}>
          {tabs.map(function(item) {
            if (item.key == 'ranking') {
              return <TabPane key={item.key} tab={item.tab}>
                <Table dataSource={dataSource} hasBorder={false} onRowClick={_this.onTeamInfoOpen.bind(_this)}>
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
        <Dialog
          visible={_this.state.visibleTeamInfo}
          footer={footer}
          onClose={_this.onTeamInfoClose}
          style={styles.teamInfo}
        >
          <Row>
            <Col style={styles.col}>
              排名：{_this.state.teamInfo.ranking}
            </Col>
          </Row>
          <Row>
            <Col style={styles.col}>
              积分：{_this.state.teamInfo.score} PTT-Silver
            </Col>
          </Row>
          <Row>
            <Col style={styles.col}>
              人数：{_this.state.teamInfo.number_of_people}
            </Col>
          </Row>
          {
            _this.state.teamInfo.type == "团队" ? <Row>
              <Col xxs={8} style={{ textAlign: "center" }}>
                <img src={teamLogo} width="64" height="64" alt="address" />
              </Col>
              <Col xxs={16}>
                <span style={{ fontSize: "16px" }}>名称：{_this.state.teamInfo.name}</span>
                <br />
                团队描述：{_this.state.teamInfo.desc}
              </Col>
            </Row> : <Col>
              <span style={{ fontSize: "16px" }}>名称：{_this.state.teamInfo.name}</span>
            </Col>
          }
        </Dialog>
      </div>
    );
  }
}

const styles = {
  col: {
    fontSize: "20px",
    margin: "25px 25px 25px 10px",
    wordBreak: "break-all",
    wordWrap:"break-word",
  },
}