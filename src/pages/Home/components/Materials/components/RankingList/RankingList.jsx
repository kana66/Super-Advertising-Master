import React, { Component } from 'react';
import { Tab } from '@icedesign/base';

const TabPane = Tab.TabPane;

const tabs = [
  { tab: "排名", key: "ranking", content: "这里是排名列表" },
  { tab: "我的", key: "my", content: "这里是我的列表" },
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

