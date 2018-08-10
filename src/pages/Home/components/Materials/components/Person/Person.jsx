import React, { Component } from 'react';
import { Tab, Grid, Feedback, Balloon } from '@icedesign/base';
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
              <Row>
                <Col>
                  锁定1000PTT，预计收益1ETH
                </Col>
              </Row>
              <Row>
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
              <Row>
                <Col>
                  800/1000 PTT-Silver
                </Col>
              </Row>
            </TabPane>
          } else {
            return <TabPane key={item.key} tab={item.tab}>
              {item.content}
            </TabPane>
          }
        })}
      </Tab>
    );
  }
}

