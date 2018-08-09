import React, { Component } from 'react';
import { Balloon, Icon } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';

const MENUS = [
  {
    name: '主页',
    path: '/ice/docs/ice-design',
  },
  {
    name: '活动',
    path: '/ice/docs',
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

  render() {
    return (
      <div className="header-container">
        <div className="header-content">
          <Logo isDark />
          <div className="header-navbar">
            <Menu className="header-navbar-menu" mode="horizontal">
              {this.renderMenuItem()}
              <Menu.Item key={'login'}>
                <a href=''>登录</a>
              </Menu.Item>
              <Menu.Item key={'register'}>
                <a href=''>注册</a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
