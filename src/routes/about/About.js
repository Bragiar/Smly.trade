import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './About.css';

export default class About extends Component {
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
    <h1 className="smlyabout__title">About SmileyCoin</h1>
    <p>
        A cryptocurrency has been specially designed to reward students for their studies.
        The currency bears the apt name Smileycoin or SMLY and is used within the tutor-web online learning platform.
        The tutor-web is a freely accessible and completely open web-based platform, initially developed as a research tool for on-line education.
        <br/><br/>
        In order to make the SMLY more attractive several approaches have been used, including support from companies whose services can be purchased for SMLY.
        <br/><br/>
        A few thousand students have taken courses using the SMLY.
        <br/><br/>
        The SMLY recently celebrated its second birthday, making it an established cryptocurrency and no longer a newcomer.
        <br/><br/>
        A separate project, Education In A Suitcase, uses the tutor-web and SMLY on servers and tablet computers distributed to very low-income regions of Africa. The picture shows an EIAS member handing out crowdfunded tablets to students at the primary school on the island of Takawiri in Lake Victoria. The island has no Internet nor general electricity, but one of the school buildings has solar panels which give unstable electricity. The unstable electricity is all it takes for the system to run. The server has a complete copy of the tutor-web along with all of (English) Wikipedia and the Khan Academy math videos
      </p>
      <p className = "smlyabout__link">
        If you want to learn even more about Smileycoin here is <br/>
        <a href="http://ledgerjournal.org/ojs/index.php/ledger/article/view/103/84">A peer-reviewed paper</a>
        describing the Smileycoin in more detail than you ever wanted to hear!
    </p>
    <div className = "smlyabout__back">
      <a href="index.html">Go back</a>
    </div>

  </div>
  </div>
      </section>
    );
  }
}