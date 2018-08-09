import React, { Component } from 'react';
import { Tab } from '@icedesign/base';

const TabPane = Tab.TabPane;

const tabs = [
  { tab: "参加", key: "join", content: "这里是参加内容" },
  { tab: "账户", key: "account", content: "这里是账户内容" },
];

export default class Person extends Component {
  static displayName = 'Person';

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

  render() {
    return (
      <Tab onChange={this.handleChange}>
        {tabs.map(item => (
          <TabPane key={item.key} tab={item.tab} onClick={this.handleClick}>
            {item.content}
          </TabPane>
        ))}
      </Tab>
    );
  }
}

