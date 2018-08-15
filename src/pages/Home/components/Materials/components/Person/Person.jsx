import React, { Component } from 'react';
import { Tab, Grid, Feedback, Balloon, Button } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';
import copy from 'copy-to-clipboard';

const { Row, Col } = Grid;
const TabPane = Tab.TabPane;
const tabs = [
  { tab: "参加", key: "join", content: "这里是参加内容" },
  { tab: "账户", key: "account", content: "这里是账户内容" },
];
const addressQrcode = '/public/images/address_qrcode.png';

export default class Person extends Component {
  static displayName = 'Person';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      copyAddress: '0xb40EdcF24BDd7379a95739655f97564d36299616'
    };
  }
  
  handleChange(key) {
    console.log("change", key);
  }
  
  handleClick(key) {
    console.log("click", key);
  }

  copyAddress() {
    console.log(this.state)
    copy(this.state.copyAddress)
    Feedback.toast.success('复制成功。若失败，请手动复制。')
  }

  render() {
    let _this = this
    return (
      <Tab onChange={this.handleChange}>
        {tabs.map(function(item) {
          if (item.key == 'join') {
            return <TabPane key={item.key} tab={item.tab}>
              <Row wrap>
                <Col style={styles.col}>
                  目前预计可获得收益 ： <span style={styles.span}>0 CNY</span>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  我的排名 ： <span style={styles.span}>-</span>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  距离下一收益级还需 ： <span style={styles.span}>0 PTT</span>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  已出租额度 ： <span style={styles.span}>0 PTT</span>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  我的积分 ： <span style={styles.span}>0 PTT</span><br />
                  <span style={styles.creditDescSpan}>积分计算公式 ： 总出租额度 × 总出租时间</span>
                </Col>
              </Row>
              <Row wrap>
                <Col align={"center"} style={{ textAlign: "center" }}>
                  <Button size={"large"} type={"primary"} style={styles.addButton}>增加出租额度</Button>
                </Col>
              </Row>
            </TabPane>
          } else {
            return <TabPane key={item.key} tab={item.tab}>
              <Row wrap>
                <Col>
                  锁定1000PTT，预计收益1ETH
                </Col>
              </Row>
              <Row wrap>
                <Col>
                  打入并锁定PTT1个月，产生可租借额度<br />
                  {_this.state.copyAddress}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Balloon trigger={<FoundationSymbol type="copy" onClick={_this.copyAddress.bind(_this)} />} closable={false}>
                    点击复制地址
                  </Balloon>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Balloon trigger={<FoundationSymbol type="qrcode" />} closable={false}>
                    <img src={addressQrcode} width="128" height="128" alt="address" />
                  </Balloon>
                </Col>
              </Row>
              <Row wrap>
                <Col>
                  800/1000 PTT-Silver
                </Col>
              </Row>
            </TabPane>
          }
        })}
      </Tab>
    );
  }
}

const styles = {
  col: {
    fontSize: "16px",
    margin: "25px 25px 25px 10px",
  },
  addButton: {
    borderRadius: 0,
    margin: "26px",
    fontSize: "20px",
    padding: "10px 30px",
    height: 52,
  },
  span: {
    fontSize: "18px",
    color: "#3080FE",
    fontWeight: "bold",
  },
  creditDescSpan: {
    fontSize: "12px",
    color: "#A39F9E",
  },
}