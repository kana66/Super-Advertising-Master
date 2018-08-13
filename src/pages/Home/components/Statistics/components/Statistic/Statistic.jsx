import React, { Component } from 'react';
import { Grid, Feedback, Balloon } from '@icedesign/base';
import FoundationSymbol from 'foundation-symbol';
import copy from 'copy-to-clipboard';
import IceTitle from '@icedesign/title';
import IceIcon from '@icedesign/icon';

const { Row, Col } = Grid;
const addressQrcode = '/public/images/address_qrcode.png';

export default class Statistic extends Component {
  static displayName = 'Statistic';

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
      <div>
        <IceTitle decoration={false}>
          基本数据 &nbsp;
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
          <Col>
            总参与人数 ： 12345
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
      </div>
    )
  }
}

