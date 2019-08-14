import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './CoinInfo.css';

export default class CoinInfo extends Component {
  render() {
    return (
      <section className="aboutpage">
      <div className = "heading info">
        <div className ="heading__content">
            <div className = "heading__img">
                <img src="smiley3.png" alt="Smileycoin"/>
            </div>
            <div className="heading__content__title">
                <div className="heading__content__title__title">
                    <p className = "title bold">Smiley</p>
                    <p className = "title">Coin</p>
                </div>
            </div>
        </div>
    </div>
  <div className = "smly">
    <div className = "smlyabout">
    <h1 className="smlyabout__title">Coin and Mining Information</h1>
        <p>
        The following information is intended specifically for miners who help run the SMLY cryptocoin network. Attempts are made to keep it up-to-date, but the thread at <a href = "https://bitcointalk.org/index.php?topic=845761">https://bitcointalk.org/index.php?topic=845761</a> keeps a track record of the development.
        <br/><br/>
        The tutor-web project pre-mined just under 50% of all coins. Since the initial phase, mining has been open to any miner. The opening date for mining was Nov. 24 2014, as announced on twitter (by @gstefans), on the main talk forum at <a href = "https://bitcointalk.org/index.php?topic=845761.0">https://bitcointalk.org/index.php?topic=845761.0</a>; all and on <a href = "https://www.altcoincalendar.info">https://www.altcoincalendar.info</a>.
        <br/><br/>
        As explained elsewhere on this page, the pre-mined coins are used to reward students for their performance. In addition, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY. Uses may include but are not limited to gaming projects requiring the use of SMLY as a currency. IMPORTANT: The premine has been moved entirely into a SmileyCoin Fund governed by a Board which accepts applications from developers and organisers of educational or other technologies which can use or promote the use of SMLY
        <br/><br/>
        During the premine phase one experiment was conducted on the use of the SMLY in a class of 200 students. The purpose was to debug and test the entire system on a live student group. Only minor student participation is expected and few wallets were predicted to be set up. The predicted amount of SMLY to be spent was about one block reward or 10000 SMLY.
        <br/><br/>
        Initial block reward: 10000 SMLY.
        <br/><br/>
        The coin is based on litecoin source. The source code is freely available. UPDATE: The code has been revised and is from 2017 based on Auroracoin code.
        <br/><br/>
        A total of 50*10^9 (50 billion) coins will eventually be generated, half during the pre-mine phase.
        <br/><br/>
        Difficulty will be adjusted approximately every 5 days so as to obtain a new block every 3 minutes on average. This difficulty schedule aims to reduce the non-premined coins by 50% over 7 years. Modification: The difficulty computations were revised in August, 2015, after which difficulty is re-evaluated every 60 blocks, still with a goal to mine a new block every 3 minutes.
        <br/><br/>
        Main mining discussion thread: <a href = "https://bitcointalk.org/index.php?topic=845761">https://bitcointalk.org/index.php?topic=845761</a>
        <br/><br/>
        Mining pools are available: <a href = "smly.hashlink.edu" >smly.hashlink.edu</a>
        <br/><br/>
        Coin explorers: <a href = "https://chainz.cryptoid.info/smly/">https://chainz.cryptoid.info/smly/</a> and <a href = "https://blocks.smileyco.in/">https://blocks.smileyco.in/</a>
        <br/><br/>
        The SMLY is registered at cryptocoin exchanges, where it is possible to exchange SMLY for other electronic currencies such as Dogecoin (DOGE) and Litecoin (LTC) as well as Bitcoin (BTC).
        See for example <a href = "https://tradesatoshi.com/">https://tradesatoshi.com/</a> <a href = "https://www.southxchange.com/Market/Book/SMLY/LTC">https://www.southxchange.com/Market/Book/SMLY/LTC</a>, and <a href = "https://novaexchange.com/market/DOGE_SMLY/">https://novaexchange.com/market/DOGE_SMLY/</a>
        <br/><br/>
        the tutor-web project provided a minimal mining capacity to ensure SMLY network functionality.
        </p>
      </div>
  </div>
      </section>
    );
  }
}
