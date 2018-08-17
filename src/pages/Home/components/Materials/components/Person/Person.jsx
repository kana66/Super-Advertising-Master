import React, { Component } from 'react';
import { Tab, Grid, Feedback, Balloon, Button, Dialog, Table, Pagination, Input } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';
import copy from 'copy-to-clipboard';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';

const { Row, Col } = Grid;
const TabPane = Tab.TabPane;
const tabs = [
  { tab: "参加", key: "join", content: "这里是参加内容" },
  { tab: "账户", key: "account", content: "这里是账户内容" },
];
const dataSource = [
  { action: "打入", target: "帮推客战队", coins: "1380", created_at: "2018-08-15 19:00:00" },
  { action: "打入", target: "星球公司", coins: "1280", created_at: "2018-08-15 18:00:00" },
  { action: "打入", target: "自己", coins: "1180", created_at: "2018-08-15 17:00:00" },
  { action: "打入", target: "自己", coins: "980", created_at: "2018-08-15 16:00:00" },
  { action: "打入", target: "星球公司", coins: "880", created_at: "2018-08-15 15:00:00" },
];
const addressQrcode = "/public/images/address_qrcode.png";
const createTeam = "/public/images/create_team.png";
const joinTeam = "/public/images/join_team.png";
const increaseAmount = "/public/images/increase_amount.png";

export default class Person extends Component {
  static displayName = 'Person';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      copyAddress: '0xb40EdcF24BDd7379a95739655f97564d36299616',
      visibleIncreaseAmount: false,
      visibleCreateTeam: false,
      visibleJoinTeam: false,
      isPay: true,
    };
  }
  
  handleChange(key) {
    console.log("change", key);
  }
  
  handleClick() {
    if (this.state.isPay) {
      this.setState({
        isPay: false,
      })
    } else {
      this.setState({
        isPay: true,
      })
    }
  }

  copyAddress() {
    console.log(this.state)
    copy(this.state.copyAddress)
    Feedback.toast.success('复制成功。若失败，请手动复制。')
  }

  onIncreaseAmountOpen = () => {
    this.setState({
      visibleIncreaseAmount: true
    });
  };

  onIncreaseAmountClose = () => {
    this.setState({
      visibleIncreaseAmount: false
    });
  };

  onCreateTeamOpen = () => {
    this.setState({
      visibleCreateTeam: true
    });
  };

  onCreateTeamClose = () => {
    this.setState({
      visibleCreateTeam: false
    });
  };

  onJoinTeamOpen = () => {
    this.setState({
      visibleJoinTeam: true
    });
  };

  onJoinTeamClose = () => {
    this.setState({
      visibleJoinTeam: false
    });
  };

  render() {
    let _this = this
    let footer = (
      <a />
    );
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
                  <Button 
                    size={"large"} 
                    type={"primary"} 
                    style={styles.smallIncreaseButton} 
                    onClick={_this.onIncreaseAmountOpen.bind(_this)}
                  >
                    增加出租额度
                  </Button>
                  <Dialog
                      visible={_this.state.visibleIncreaseAmount}
                      footer={footer}
                      onClose={_this.onIncreaseAmountClose}
                      style={styles.increaseAmount}
                    >
                      <Row>
                        <Col style={{ fontSize: "16px", margin: "25px 25px 25px 10px" }}>
                          充值地址：
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ fontSize: "14px", margin: "0px 0px 0px 15px", wordBreak: "break-all", wordWrap:"break-word" }}>
                          {_this.state.copyAddress}&nbsp;&nbsp;&nbsp;&nbsp;
                          <Balloon 
                            trigger={<FoundationSymbol type="copy" onClick={_this.copyAddress.bind(_this)}>复制</FoundationSymbol>} 
                            closable={false}
                          >
                            点击复制地址
                          </Balloon>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ textAlign: "center", marginTop: "40px" }}>
                          <img src={addressQrcode} width="128" height="128" alt="address" />
                        </Col>
                      </Row>
                    </Dialog>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  我的积分 ： <span style={styles.span}>0 PTT</span><span onClick={_this.handleClick.bind(_this)}>切换</span><br />
                  <span style={styles.creditDescSpan}>积分计算公式 ： 总出租额度 × 总出租时间</span>
                  <span style={styles.creditDescSpan}>切换</span>
                </Col>
              </Row>
              {
                _this.state.isPay ? <Row wrap>
                  <Col align={"center"} style={{ textAlign: "center" }}>
                    <img 
                      src={createTeam}
                      style={styles.img}
                      onClick={_this.onCreateTeamOpen.bind(_this)}
                    />
                    <Dialog
                      visible={_this.state.visibleIncreaseAmount}
                      footer={footer}
                      onClose={_this.onIncreaseAmountClose}
                      style={styles.increaseAmount}
                    >
                      <Row>
                        <Col style={{ fontSize: "16px", margin: "25px 25px 25px 10px" }}>
                          充值地址：
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ fontSize: "14px", margin: "0px 0px 0px 15px", wordBreak: "break-all", wordWrap:"break-word" }}>
                          {_this.state.copyAddress}&nbsp;&nbsp;&nbsp;&nbsp;
                          <Balloon 
                            trigger={<FoundationSymbol type="copy" onClick={_this.copyAddress.bind(_this)}>复制</FoundationSymbol>} 
                            closable={false}
                          >
                            点击复制地址
                          </Balloon>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{ textAlign: "center", marginTop: "40px" }}>
                          <img src={addressQrcode} width="128" height="128" alt="address" />
                        </Col>
                      </Row>
                    </Dialog>
                  </Col>
                  <Col align={"center"} style={{ textAlign: "center" }}>
                    <img 
                      src={joinTeam}
                      style={styles.img}
                      onClick={_this.onJoinTeamOpen.bind(_this)}
                    />
                    <Dialog
                      visible={_this.state.visibleCreateTeam}
                      footer={footer}
                      onClose={_this.onCreateTeamClose}
                      style={styles.increaseAmount}
                    >
                      <IceFormBinderWrapper
                        value={_this.state.value}
                        onChange={_this.formChange}
                        ref="form"
                      >
                        <div style={styles.formItems}>
                          <Row style={styles.formItem}>
                            <Col style={styles.formItemCol}>
                              <IceIcon type="phone" size="small" style={styles.inputIcon} />
                              <IceFormBinder
                                name="phone"
                                required
                                message="请输入正确的手机号"
                              >
                                <Input size="large" maxLength={11} placeholder="请输入手机号码" style={styles.input} />
                              </IceFormBinder>
                            </Col>
                            <Col>
                              <IceFormError name="phone" />
                            </Col>
                          </Row>

                          <Row style={styles.formItem}>
                            <Col style={styles.formItemCol}>
                              <IceIcon type="lock" size="small" style={styles.inputIcon} />
                              <IceFormBinder
                                name="captcha"
                                required
                                message="请输入收到的验证码"
                              >
                                <Input size="large" maxLength={11} placeholder="请输入验证码" style={styles.input} />
                              </IceFormBinder>
                            </Col>
                            <Col>
                              <IceFormError name="captcha" />
                            </Col>
                          </Row>

                          <Row style={styles.formItem}>
                            <Button
                              type="primary"
                              onClick={_this.handleSubmit}
                              style={styles.submitBtn}
                            >
                              登录 / 注册
                            </Button>
                          </Row>
                        </div>
                      </IceFormBinderWrapper>
                    </Dialog>
                  </Col>
                  <Col align={"center"} style={{ textAlign: "center" }}>
                    <img
                      src={increaseAmount}
                      style={styles.img}
                      onClick={_this.onIncreaseAmountOpen.bind(_this)}
                    />
                    <Dialog
                      visible={_this.state.visibleJoinTeam}
                      footer={footer}
                      onClose={_this.onJoinTeamClose}
                      style={styles.increaseAmount}
                    >
                      <Row>
                        <Col style={{ fontSize: "16px", margin: "25px 25px 25px 10px" }}>
                          加入
                        </Col>
                      </Row>7
                    </Dialog>
                  </Col>
                </Row> :  <Row wrap>
                  <Col align={"center"} style={{ textAlign: "center" }}>
                    <Button 
                      size={"large"} 
                      type={"primary"} 
                      style={styles.increaseButton} 
                      onClick={_this.onIncreaseAmountOpen.bind(_this)}
                    >
                      增加出租额度
                    </Button>
                  </Col>
                </Row> 
              }
              
            </TabPane>
          } else {
            return <TabPane key={item.key} tab={item.tab}>
              <Row wrap>
                <Col style={styles.col}>
                  充值地址 ： <span style={styles.span}>{_this.state.copyAddress}</span>
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
                <Col style={styles.col}>
                  已充值PTT ： <span style={styles.span}>1000</span>
                </Col>
              </Row>
              <Row wrap>
                <Col style={styles.col}>
                  PTT-Silver ： <span style={styles.span}>100</span>/1000
                </Col>
              </Row>
              <Row wrap>
                <Col>
                  <Table dataSource={dataSource} hasBorder={false}>
                    <Table.Column title="动作" dataIndex="action" />
                    <Table.Column title="目标" dataIndex="target" />
                    <Table.Column title="数量" dataIndex="coins" />
                    <Table.Column title="时间" dataIndex="created_at" />
                  </Table>
                  <Pagination style={{ textAlign: 'center' }} shape="no-border" type="simple" onChange={_this.handlePageChange} />
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
    wordBreak: "break-all",
    wordWrap:"break-word",
  },
  increaseButton: {
    borderRadius: 0,
    margin: "26px",
    fontSize: "20px",
    padding: "10px 30px",
    height: 52,
  },
  smallIncreaseButton: {
    borderRadius: 0,
    marginLeft: "25px",
    fontSize: "16px",
    // padding: "10px 30px",
    // height: 52,
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
  increaseAmount: {
    height: 500,
    width: 300,
    padding: 10,
  },
  img: {
    height: 80,
    width: 80,
    cursor: "pointer",
  },
  formItem: {
    position: 'relative',
    marginBottom: '20px',
    flexDirection: 'column',
    padding: '0',
  },
  formItemCol: {
    position: 'relative',
    padding: '0',
  },
  inputIcon: {
    position: 'absolute',
    left: '35px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999',
  },
  submitBtn: {
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
    background: '#3080fe',
    borderRadius: '4px',
    width: '200px',
    margin: '0 auto',
  },
  input: {
    paddingLeft: '32px',
  },
}