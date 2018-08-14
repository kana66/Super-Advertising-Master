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
            <h2 style={styles.title}>
              参加一同瓜分 <span style={styles.moneySpan}>100 ETH</span> & <span style={styles.moneySpan}>1,000,000 PTT</span> 现金
            </h2>
            <div
              className="landing-intro-banner-buttons"
              style={{ 
                textAlign: 'center', 
                marginTop: 30 
              }}
            >
              {/* <span 
                style={{ 
                  border: "2px solid white",
                  padding: "3px",
                  lineHeight: 60,
                }}
              > */}
                <Button
                  style={{
                    height: 50,
                    padding: '0 58px',
                    fontSize: 20,
                    marginBottom: '20px',
                    color: '#666666',
                    borderRadius: 0,
                    fontWeight: "bold",
                  }}
                  size="large"
                  type="normal"
                >
                  参加
                </Button>
              {/* </span> */}
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
    fontSize: '24px',
    letterSpacing: '4px',
    lineHeight: '60px',
    color: '#fff',
    margin: 30,
  },
  subTitle: {
    fontSize: '20px',
    margin: '0px',
    color: '#fff',
    // textShadow: '#C8C8C8 1px 1px 2px',
    textAlign: 'center',
    lineHeight: '34px',
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
  moneySpan: {
    fontSize: '30px',
  }
};
