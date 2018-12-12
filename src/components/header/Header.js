import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Coins from '../coins';

export default class Header extends Component {
  state = { listOpen: false }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const { listOpen } = this.state;
    const { data, loading, error } = this.state;
    console.log(data)
    var divStyle = {
      width: '40px',
      height: '40px'
    }

    // if (error || !data) {}


    return (
      <header className="header">
      <div className="header__content">
        <div className="header__row">
          <div className="header__icon">
            <img src={require('../../img/smiley3.png')} alt="Smileycoin" style={divStyle}/>
            <h1 className="header__title"><Link to="/">SmileyCoin</Link></h1>
          </div>
          <nav className="header__nav">
            <Coins/>
            <ul className="header__list">
              <li className="header__item header__hide"><Link to="/getstarted" className="header__link">Get Started</Link></li>
              <li className="header__item header__hide"><Link to="/about" className="header__link">Introduction</Link></li>
              <li className="header__item">
                <div className="dropdown">
                  <div className="dropdown__header" onClick={ () => this.toggleList()}>
                    <div className="dropdown__header__title"><p>{String.fromCharCode(9776)}</p></div>
                  </div>
                  {listOpen && (
                    <ul className="dropdown__list" onClick={ () => this.toggleList()}>
                      <Link to="/" className="dropdown__link"><li className="dropdown__list__item">Home</li></Link>
                      <Link to="/getstarted" className="dropdown__link"><li className="dropdown__list__item">Get Started</li></Link>
                      <Link to="/about" className="dropdown__link"><li className="dropdown__list__item">Introduction</li></Link>
                      <Link to="/community" className="dropdown__link"><li className="dropdown__list__item">Community</li></Link>
                      <Link to="/games" className="dropdown__link"><li className="dropdown__list__item">Games</li></Link>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    )
  }
}
