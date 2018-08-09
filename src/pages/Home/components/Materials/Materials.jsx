import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import { Link } from 'react-router-dom';

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
      <div style={styles.wrapper}>
        <div style={styles.inntroContent}>
          <h3 style={styles.title}>海量物料</h3>
          <div style={styles.titleLine}>
            <div style={styles.titleHighlightLine} />
          </div>
          <p style={styles.desc}>
            专业视觉设计，每周物料更新，丰富组合区块，不同领域模板
            自定义主题配置，响应式设计，海量物料满足您开发所需
          </p>
          <Link to="">
            <Button style={styles.extraButton}>了解更多 &gt;</Button>
          </Link>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    height: '750px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inntroContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#fff',
    width: '466px',
  },
  titleLine: {
    width: '140px',
    height: '2px',
    marginTop: '17px',
    background: '#FFFFFF',
    borderLeft: '2px solid ##5fb2f8',
  },
  titleHighlightLine: {
    background: '#3080FE',
    height: '2px',
    width: '33px',
  },
  title: {
    fontSize: '36px',
  },
  desc: {
    fontSize: '16px',
    lineHeight: 1.5,
    marginTop: '34px',
    textAlign: 'center',
  },
  extraButton: {
    marginTop: '85px',
    borderColor: '#fff',
    background: 'transparent',
    color: '#fff',
  },
};
