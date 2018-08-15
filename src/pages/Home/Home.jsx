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
    this.state = {};
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

  render() {
    return (
      <div className="home-page" style={{ background: '#3E3A39' }}>
        <Header />
        <LandingIntroBanner />
        <Statistics />
        <Materials />
        <Footer />
      </div>
    );
  }
}
