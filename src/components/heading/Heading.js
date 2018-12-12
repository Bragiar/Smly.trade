import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Heading.css';

export default class Heading extends Component {

  render() {
    return (
    <div className = "heading info">
        <div className ="heading__content">
            <div className ='heading__img'>
              <img src={require('../../img/smiley3.png')} alt="Smileycoin"/>
            </div>
            <div className="heading__content__title">
                <div className="heading__content__title__title">
                    <p className = "title bold">Smiley</p>
                    <p className = "title">Coin</p>
                </div>
                <p className = "heading__content__title__undertitle title">Trading website</p>
            </div>
        </div>
        <div className = "heading__about title">
            Smileycoin is an open source peer-to-peer digital currency used for rewarding students for their performance in the tutor-web learning environment
        </div>
    </div>

    )
  }
}
