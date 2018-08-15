import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import Statistics from './components/Statistics';
import Materials from './components/Materials';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  // onWindowResize() {
  //   let pageWidth = document.body.clientWidth
  //   console.log(pageWidth)
  // }

  // componentDidMount() {
  //   window.addEventListener('resize', this.onWindowResize)
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.onWindowResize)
  // }

  onClick() {
    if (this.state.isLogin) {
      this.setState({ isLogin: false })
    } else {
      this.setState({ isLogin: true })
    }
  }

  render() {
    return (
      <div className="home-page" style={{ background: '#3E3A39' }}>
        <Header />
        {
          this.state.isLogin ? <div>
            <Materials />
          </div> : <div>
            <LandingIntroBanner />
            <Statistics />
          </div>
        }
        <div onClick={this.onClick.bind(this)}>切换</div>
        <Footer />
      </div>
    );
  }
}
