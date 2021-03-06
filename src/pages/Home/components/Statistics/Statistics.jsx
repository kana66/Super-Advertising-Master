import React, { Component } from 'react';
import { Grid, Feedback } from '@icedesign/base';
import Statistic from './components/Statistic';
import RankingList from './components/RankingList';

const { Row, Col } = Grid;

export default class Statistics extends Component {
  static displayName = 'Statistics';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap style={styles.wrapper}>
        <Col xxs='22' xs='22' s='10' style={styles.col}>
          <RankingList />
        </Col>
        <Col xxs='22' xs='22' s='10' style={styles.col}>
          <Statistic />
        </Col>
      </Row>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    // height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
  },
  col: {
    // background: '#F2F2F2',
    margin: 30,
    // height: 400,
  },
};
