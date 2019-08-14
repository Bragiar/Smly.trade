import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexCoin.css';

export default class IndexCoin extends Component {
  render() {
    return (
    <div className = "coin">
      <div className = "coin__content">
          <div className = "coin__content__title">
              <h2>Coin Information</h2>
          </div>
          <div className = "coin__content__info">
            <div className = "coin__content__info__img">
            <img src = {require('../../img/search.png')}></img>
            </div>
            <div className = "coin__content__text">
                <p>
                The tutor-web project pre-mined just under 50% of all coins and since the initial phase, mining has been open to any miner. <br></br>
                The pre-mined coins are used to reward students for their performance. In addition, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY.
                </p>
            </div>
          </div>
          <div className = "about__links">
              <div className = "link__more coininfo">
                  <Link className = "" to="/coininfo">More details</Link>
              </div>
              <div className = "link__more whitepaper">
                <a href = "http://ledgerjournal.org/ojs/index.php/ledger/article/view/103/84">Whitepaper</a>
              </div>
          </div>
      </div>
    </div>
    );
  }
}
