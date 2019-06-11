import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './GetStarted.css';

export default class GetStarted extends Component {
  render() {

    var imgStyle
    return (
      <section className="howto">
        <Helmet title="Get Started" />
        <div className = "how-to-header">
          <div className ="how-to-header__content">
              <div className = "how-to-header__content__img how-to-header__content__img--left">
                  <img src="smiley3.png" alt="Smileycoin"/>
              </div>
              <h1 className = "how-to-header__content__title">How can you get SMLY?</h1>
              <div className = "how-to-header__content__img how-to-header__content__img--right">
                    <img src="smiley3.png" alt="Smileycoin"/>
             </div>
          </div>
          </div>
          <div className="how-to__row">
          <div className = "how-to__col">
            <div className = "how-to__title" name = "easy">Easiest: Donate to Education in a Suitcase</div>
            <div className = "how-to__content">
                <div>
                    The project Education in a Suitcase will happily accept your donations. In return for a donation, they will give you some Smileycoins.
                    <br/>
                    Remember to use only small amounts while you are finding your way through this!
                    <br/>
                    You will not make money from this transaction, but you will painlessly get some Smileycoins which you can then use to test the waters of electronic currencies.
                    <br/><br/>
                    Make sure you first have a SMLY wallet! There are multiple wallets available for smileycoin:
                    <br/>
                    <ul>
                        <li>An easy to use <a href="https://wallet.smileyco.in/" >online wallet</a></li>
                        <li>The <a href="https://play.google.com/store/apps/details?id=com.coinomi.wallet&hl=en">android coinomi app.</a></li>
                        <li><a href="https://tutor-web.info/smileycoin/download" > Download a desktop wallet</a></li>
                    </ul>
                    It is easy to test this: Just go to their <a href="http://educationinasuitcase.com/donation/en/index.html">Donation page</a> and send them five dollars. If you follow the instructions, then you will quickly see some Smileycoins in your wallet.
                    <br/>
                    Now, these donation pages are mostly in Icelandic at the time of this writing. You will want to know the following:
                </div>
                <ul>
                    <li>The amount is in Icelandic kronor. Very roughly, 1 USD=120 ISK</li>
                    <li>Hitting the "Styrkja..."="Donate..." button takes you to the next page</li>
                    <li>This takes you to a page where you (securely) give your credit card info</li>
                    <li>After you have made your donation, you will be offered Smileycoins</li>
                    <li>Just enter your Smileycoin wallet address and you will get some coins</li>
                </ul>
            </div>
          </div>
    </div>
    <div className="how-to__row">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "work">With work: Get SMLY by studying in the tutor-web system</div>
            <div className = "how-to__content">
                <p>
                    The <a href = "https://tutor-web.net/"> tutor-web system </a> is a completely free and open system of study.
                    You can pick any course or study-unit (tutorial) and study this to your hearts content by reading the available material and (most importantly) answering drill questions.
                    As you increase your grade in those drills, you will get SMLY. Once you have SMLY you can download them into a Smileycoin wallet.
                </p>
            </div>
        </div>
    </div>
    <div className="how-to__row">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "long">The long way: Buy SMLY at a cryptocurrency exchange</div>
            <div className = "how-to__content">
                    <p>
                    Getting into the world of cryptocurrencies is a bit tricky. There are several hurdles to get started using cryptocoins and buying your first SMLY is not quite trivial.
                    <br/><br/>
                    You will always need to have an account at a cryptocurrency exchange.
                    <br/><br/>
                    The exchanges at <a href="https://tradesatoshi.com/">Tradesatoshi</a>, <a href="https://www.southxchange.com/Market/Book/SMLY/DOGE">SouthXchange</a> and <a href="https://novaexchange.com/">Novaexchange</a>  have several "markets", i.e. places which look like a stock market and you can sell one cryptocurrency for another. Both of these exchanges have SMLY markets.
                    The following is currently the easiest method to buy SMLY for fiat (ordinary money).
                    (Here we using VirVoX to buy BTC but you can use any service you like. If you are a Icelandic citizen we recommend using <a href="https://isx.is/">ISX.is</a> to buy BTC)
                    </p>
                    <ul>
                        <li>Get an account at an exchange: <a href="https://tradesatoshi.com/">https://tradesatoshi.com/</a>, <a href="https://c-cex.com">https://c-cex.com</a> and <a href="https://novaexchange.com/">https://novaexchange.com/</a>  have several "markets", i.e. places which look like a stock market and you can sell one cryptocurrency for another. Both of these exchanges hav</li>
                        <li>Deposit fiat (USD, GBP or EUR) using PayPal, VISA etc at https://www.virwox.com/</li>
                        <li>an account at https://www.virwox.com/</li>
                        <li>Buy SLL for fiat at https://www.virwox.com/</li>
                        <li>Buy BTC for SLL at https://www.virwox.com/</li>
                        <li>Transfer the BTC from https://www.virwox.com/ to your address at the exchange</li>
                        <li>Buy DOGE or LTC for BTC on the exchange</li>
                        <li>Buy SMLY for DOGE or LTC on the exchange</li>
                    </ul>
            </div>
        </div>
    </div>
    <div className="how-to__row how-to__row--last">
        <div className = "how-to__col">
            <div className = "how-to__title" name = "wind">The winding way: Use the SMLY ATM</div>
            <div className = "how-to__content">
                    Recently, experiments have been made with a SMLY ATM. This is a black-box into which one deposits Litecoin and gets back Smileycoin. <a href="https://steemit.com/blockchain/@gstefans/more-messing-around-with-the-blockchain-an-atm-for-smly"> A document is available </a> describing the non-trivial process.
            </div>
            <div className = "smlyabout__back">
                <Link to="/" className = "backLink">Go back</Link>
            </div>
        </div>
    </div>
    </section>
    );
  }
}
