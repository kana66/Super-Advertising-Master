import React, { Component } from 'react';
import { Grid, Feedback } from '@icedesign/base';
import Person from './components/Person';
import RankingList from './components/RankingList';

const { Row, Col } = Grid;

export default class IntroWithBackground extends Component {
  static displayName = 'IntroWithBackground';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap style={styles.wrapper}>
        <Col xs='22' s='10' style={styles.col}>
          <RankingList />
        </Col>
        <Col xs='22' s='10' style={styles.col}>
          <Person />
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
    background: '#F2F2F2',
    margin: 30,
    height: '90%',
  },
};
