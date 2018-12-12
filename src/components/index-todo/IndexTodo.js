import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexTodo.css';

export default class IndexTodo extends Component {
  render() {
    return (
      <div className = "todo">
          <h1 className = "todo__title">What can you do with Smileycoin?</h1>
          <div className = "todo__cards">
              <div className = "todo__card">
                  <a href="https://smly.is/" className = "todo__card__icon">
                      <img src={require('../../img/plane.svg')} alt=""/>
                  </a>
                  <div className = "todo__card__text">
                      Buy Airline coupons.
                  </div>
              </div>
              <div className = "todo__card">
                      <a href="https://smly.is/" className = "todo__card__icon">
                          <img src={require('../../img/cinema.svg')} alt=""/>
                      </a>
                      <div className = "todo__card__text">
                          Buy coupons for the icelandic cinema.
                      </div>
              </div>
              <div className = "todo__card">
                      <div className = "todo__card__icon">
                          <img src={require('../../img/teacher.svg')}  className = "todoimg" alt=""/>
                      </div>
                      <div className = "todo__card__text">Pay tutors within the tutor-web system</div>
              </div>
              <div className = "todo__card">
                      <div className = "todo__card__icon">
                          <img src={require('../../img/coffee.svg')} alt=""/>
                      </div>
                      <div className = "todo__card__text">Buy coffee on the University of Iceland campus</div>
              </div>
              <div className = "todo__card gameIcon" id="gameIcon">
                      <div className = "todo__card__icon">
                          <img src={require('../../img/todogame.svg')} alt=""/>
                      </div>
                      <div className = "todo__card__text">Play simple games, like double or nothing game</div>
              </div>
              <div className = "todo__card">
                      <div className = "todo__card__icon">
                          <img src={require('../../img/exchange.svg')} alt=""/>
                      </div>
                      <div className = "todo__card__text">Sell SMLY at a currency exchange.</div>
              </div>
          </div>
      </div>
    );
  }
}
