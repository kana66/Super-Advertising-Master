import React, { Component } from 'react';
import { Table, Pagination, Balloon } from '@icedesign/base';
import IceTitle from '@icedesign/title';
import IceIcon from '@icedesign/icon';

const dataSource = [
  { ranking: "1", name: "王小毛", score: "1380", type: "团队", change: "up" },
  { ranking: "2", name: "帮推客战队", score: "1200", type: "团队", change: "no_change" },
  { ranking: "3", name: "星球公司", score: "1140", type: "个人", change: "down" },
  { ranking: "4", name: "一", score: "900", type: "个人", change: "up" },
  { ranking: "5", name: "二", score: "700", type: "团队", change: "down" },
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
    let fontColor = "#666666"
    let fontSize = "14px"
    if (record.ranking == 1) {
      fontColor = "#FEE554"
      fontSize = "20px"
    } else if (record.ranking == 2) {
      fontColor = "#BCBCBC"
      fontSize = "20px"
    } else if (record.ranking == 3) {
      fontColor = "#DA9746"
      fontSize = "20px"
    }
    return (
      <div>
        <span style={{ color: fontColor, fontSize: fontSize }}>
          { record.ranking + '. ' }
        </span>
        { record.name }
      </div>
    )
  }

  render() {
    let _this = this;
    return (
      <div>
        <IceTitle decoration={false}>
          排名列表 &nbsp;
          <Balloon 
            trigger={<IceIcon style={{position: 'relative', color:'#666666'}} type="question" size="medium" />} 
            align="r" 
            triggerType="hover"
            closable={false}
          >
            这里是基本数据的更多描述信息。
          </Balloon>
        </IceTitle>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column title="名称" dataIndex="name" cell={_this.nameRender} />
          <Table.Column title="分数" dataIndex="score" />
          <Table.Column title="类型" dataIndex="type" />
          <Table.Column title="变化" dataIndex="change" />
        </Table>
        <Pagination style={{ textAlign: 'center' }} shape="no-border" type="simple" onChange={_this.handlePageChange} />
      </div>
    );
  }
}

