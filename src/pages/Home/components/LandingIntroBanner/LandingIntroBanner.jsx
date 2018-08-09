import React, { Component } from 'react';
import { Button } from '@icedesign/base';
import './LandingIntroBanner.scss';

export default class LandingIntroBanner extends Component {
  static displayName = 'LandingIntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div 
        className="landing-intro-banner" 
        style={{ 
          height: 400,
          marginTop: 70,
        }}
      >
        <div
          className="landing-intro-banner-background"
          style={{
            height: 400,
            backgroundImage: `url(${require('./images/background.png')})`,
            backgroundPosition: 'center',
          }}
        />
        <div className="landing-intro-banner-content-wrapper">
          <div className="landing-intro-banner-content" style={{ paddingBottom: 0 }}>
            <p style={styles.subTitle}>
              Proton联合XXX首次区块链投放测试
            </p>
            <h2 style={styles.title}>参加一同瓜分100ETH&1,000,000PTT现金</h2>
            <p style={styles.subTitle}>
              12:34:56
            </p>
            <div
              className="landing-intro-banner-buttons"
              style={{ textAlign: 'center', marginTop: 30 }}
            >
              <Button
                style={{
                  height: 50,
                  padding: '0 58px',
                  fontSize: 16,
                  marginBottom: '20px',
                  color: '#3080FE',
                }}
                size="large"
                type="normal"
              >
                参加
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '20px',
    letterSpacing: '4px',
    lineHeight: '60px',
    color: '#fff',
    marginBottom: '30px',
  },
  subTitle: {
    fontSize: '20px',
    margin: '0px',
    color: '#fff',
    textShadow: '#C8C8C8 1px 1px 2px',
    textAlign: 'center',
    lineHeight: '1.7em',
  },
  leftButton: {
    marginRight: '20px',
  },
  gitStar: {
    border: '0px',
    height: '32px',
    width: '145px',
    margin: '0 auto',
  },
  gitContainer: {
    marginTop: '30px',
    textAlign: 'center',
  },
  updateLogLinkWrap: {
    textAlign: 'center',
  },
  updateLogLink: {
    color: '#fff',
  },
};
