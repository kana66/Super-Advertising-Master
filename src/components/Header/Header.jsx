import React, { Component } from 'react';
import { Balloon, Icon, Input, Grid, Dialog, Button } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './Header.scss';

const { Row, Col } = Grid;

const MENUS = [
  {
    name: '主页',
    path: 'https://www.proton.global/',
  },
  {
    name: '活动',
    path: '/',
  },
  {
    name: '玩法',
    path: '/ice/component/button',
  },
  {
    name: '公告',
    path: '/ice/iceworks',
  },
  {
    name: '社群',
    path: 'https://zhuanlan.zhihu.com/ice-design',
  },
];

export default class Header extends Component {
  static displayName = 'Header';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visibleLogin: false
    };
  }
  
  renderBalloonContent = (menu, idx) => {
    return (
      <Menu.Item key={idx}>
        <Balloon
          className="header-balloon-content"
          closable={false}
          triggerType="click"
          trigger={
            <a>
              {menu.name}{' '}
              <Icon
                size="xxs"
                type="arrow-down-filling"
                className="arrow-down-filling-icon"
              />
            </a>
          }
        >
          {menu.children.map((subMenu, index) => {
            return (
              <a href="#" className="custom-sub-menu" key={index}>
                {subMenu.name}
              </a>
            );
          })}
        </Balloon>
      </Menu.Item>
    );
  };

  renderMenuItem = () => {
    return MENUS.map((menu, idx) => {
      if (menu.children) {
        return this.renderBalloonContent(menu, idx);
      }
      return (
        <Menu.Item key={menu.path}>
          <a href={menu.path}>{menu.name}</a>
        </Menu.Item>
      );
    });
  };

  onOpen = () => {
    this.setState({
      visibleLogin: true
    });
  };

  onClose = () => {
    this.setState({
      visibleLogin: false
    });
  };

  onClick() {
    axios.post(Config.apiHost + '/users/captcha', { phone: this.state.value.phone, country: this.state.value.country })
    .then(function (response) {
      if (response && response.status == 200 && response.data.status == 200) {
        Feedback.toast.success(response.data.msg);
      } else {
        Feedback.toast.error(response.data.msg);
      }
    })
    .catch(function (error) {
      console.log(error)
      Feedback.toast.error('服务器错误');
    })
  }

  render() {
    const footer = (
      <a />
    );
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark />
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
              <Menu.Item key={'login'}>
                <a onClick={this.onOpen}>登录</a>
              </Menu.Item>
              <Menu.Item key={'register'}>
                <a onClick={this.onOpen}>注册</a>
              </Menu.Item>
            </Menu>
          </div>
          <Dialog
            visible={this.state.visibleLogin}
            footer={footer}
            onClose={this.onClose}
            style={styles.dialog}
          >
            <div style={{ background: "#FFFFFF", justifyContent: "center", textAlign: "center" }}>
              <img src="/public/images/logo.png" alt="logo" style={styles.img}/>
              <IceFormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
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
                    <Button style={styles.captchaButton} onClick={this.onClick}>获取验证码</Button>
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
                      onClick={this.handleSubmit}
                      style={styles.submitBtn}
                    >
                      登录 / 注册
                    </Button>
                  </Row>
                </div>
              </IceFormBinderWrapper>
            </div>
          </Dialog>
        </div>
      </div>
    );
  }
}

const styles = {
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
  captchaButton: {
    fontSize: '14px',
    height: '30px',
    lineHeight: '30px',
    background: '#FFFFFF',
    borderRadius: '4px',
    width: '200px',
    margin: '0 auto',
  },
  input: {
    paddingLeft: '32px',
  },
  dialog: {
    height: 500,
    width: 300,
    padding: 10,
  },
  img: {
    height: 128,
    width: 128,
    margin: '25px',
  },
};
