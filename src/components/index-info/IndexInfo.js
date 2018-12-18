import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './IndexInfo.css';
import './Modals.css';

export default class IndexTodo extends Component {

  componentDidMount() {
    document.addEventListener('click', function(e) {
      if (e.target.className == 'modal') e.target.style.display = 'none';
    });
  }

  displayModal(e) {
    var element = e.currentTarget;
    var modal = element.nextSibling;
    modal.style.display = "block";
  }

  hideModal(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }

  render() {
    return (
      <div className="indexinfo">
        <div className = "cards">
            <Link to="/getstarted" className = "card">
                <div className = "card__icon">
                    <img src={require('../../img/rocket.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">Get started</div>
                    <div className = "card__text__description">Learn how to get Smileycoin and start using it</div>
                </div>
            </Link>

            <div className = "card community" onClick={this.displayModal}>
                <div className = "card__icon">
                    <img src={require('../../img/community.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">Community</div>
                    <div className = "card__text__description">Participate in the community</div>
                </div>
            </div>
            <div className="modal">
                {/* Modal content*/}
                <div className="CommModal-content">
                  <span className="closeComm close" onClick={this.hideModal}>&times;</span>
                  <p>Our community!</p>
                  <ul>
                      <li><a href="https://bitcointalk.org/index.php?topic=845761.msg9431919#msg9431919">SmileyCoin on Bitcointalk</a> - General discussion about the SmileyCoin ecosystem, innovation and announcements </li>
                      <li><a href="https://twitter.com/smileycoinnews?lang=en">SmileyCoin twitter page</a> - News and announcements of SmileyCoin </li>
                      <li><a href="https://www.reddit.com/r/smileycoin/">Reddit</a> - Join our Reddit Community!</li>
                      <li><a href="https://t.me/SmileyCoinInternational">Telegram</a> - SmileyCoin chatroom on Telegram</li>
                  </ul>
                </div>
            </div>

            <div className = "card games" onClick={this.displayModal}>
                <div className = "card__icon">
                    <img src={require('../../img/game.svg')} alt=""/>
                </div>
                <div className = "card__text">
                    <div className = "card__text__title">SMLY games</div>
                    <div className = "card__text__description">Learn how to use the simple double-or-nothing game</div>
                </div>
            </div>
            {/* The Game Modal */}
            <div className="modal">
                  {/* Modal content*/}
                  <div className="GameModal-content">
                      <span className="closeGame close" onClick={this.hideModal}>&times;</span>
                        <p className = "GameModal-content__title">
                           The simplest game of all is the SMLY double-or-nothing game:
                        </p>
                        <p>
                        <br/>
                        Deposit any (small) amount of SMLY to the BEtZyyY address <code>BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik</code> and you will automatically participate in a double-or-nothing game.
                        <br/><br/>
                        If you are on a Windows, Linux or Mac computer then the easiest way to do this is in the Console window, where you can give commands of the form:
                        <br/><br/>
                        <code>
                            sendtoaddress BEtZyyYqDXqmRJJ45nnL15cuASfiXg9Yik 20
                        </code>
                        <br/><br/>
                        repeatedly and see how you sometimes get the double back and sometimes nothing.
                      </p>
                  </div>
              </div>
        </div>
      </div>
    )
  }
}
