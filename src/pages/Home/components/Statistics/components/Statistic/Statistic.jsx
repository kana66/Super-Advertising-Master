import React, { Component } from 'react';
import { Grid, Balloon, Button, Icon } from '@icedesign/base';
import IceTitle from '@icedesign/title';
import IceIcon from '@icedesign/icon';

const { Row, Col } = Grid;

export default class Statistic extends Component {
  static displayName = 'Statistic';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <IceTitle decoration={false}>
          活动概览 &nbsp;
          <Balloon 
            trigger={<IceIcon style={{position: 'relative', color:'#666666'}} type="question" size="medium" />} 
            align="r" 
            triggerType="hover"
            closable={false}
          >
            这里是基本数据的更多描述信息。
          </Balloon>
        </IceTitle>
        <Row wrap>
          <Col style={styles.col}>
            活动剩余时间 ： <span style={styles.span}>125 天 20 小时 58 分 36 秒</span>
          </Col>
        </Row>
        <Row wrap>
          <Col style={styles.col}>
            每 1 PTT预计收益 ： <span style={styles.span}>1 CNY</span>
          </Col>
        </Row>
        <Row wrap>
          <Col style={styles.col}>
            PTT总数 ： <span style={styles.span}>895,632</span>
          </Col>
        </Row>
        <Row wrap>
          <Col style={styles.col}>
            总参与人数 ： <span style={styles.span}>15,632</span>
            <Button size={"large"} type={"primary"} style={styles.joinButton}>立即加入<Icon type="arrow-right" /></Button>
          </Col>
        </Row>
      </div>
    )
  }
}

const styles = {
  col: {
    fontSize: "16px",
    margin: "25px 25px 25px 10px",
  },
  joinButton: {
    marginLeft: "20px",
    borderRadius: 0,
  },
  span: {
    fontSize: "18px",
    color: "#3080FE",
    fontWeight: "bold",
  }
}