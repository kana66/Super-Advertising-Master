import React, { Component } from 'react';
import { Balloon, Icon, Overlay, Grid, Dialog } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
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

  render() {
    const footer = (
      <a onClick={this.onClose} href="javascript:;">
        Close
      </a>
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
          >
            <div style={{background: "#FFFFFF"}}>
              <Row>
                <Col>
                  <img src="/public/images/logo.png" alt="logo"/>
                </Col>
              </Row>
            </div>
            <h3>Your one-stop communication tool!</h3>
            <ul>
              <li>View messages from buyers & suppliers</li>
              <li>Negotiate the details of your order</li>
            </ul>
          </Dialog>
        </div>
      </div>
    );
  }
}
