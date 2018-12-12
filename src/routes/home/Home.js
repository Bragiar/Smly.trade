import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Timeline } from 'react-twitter-widgets'

import './Home.css';
import Heading from '../../components/heading';
import IndexAbout from '../../components/index-about';
import IndexTodo from '../../components/index-todo';
import IndexHowto from '../../components/index-howto';
import IndexInfo from '../../components/index-info';


export default class Home extends Component {
  render() {
    return (
      <section className="smileypage">
      <div className="smileypage__sidebar">
      <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'smileycoinnews'
      }}
      options={{
        username: 'SmileycoinNews',
        height: '700',
        width: '700%'
      }}
      />
      </div>
        <Helmet title="SmileyCoin"/>
        <Heading />
        <IndexAbout />
        <IndexTodo />
        <IndexHowto />
        <IndexInfo />
      </section>
    );
  }
}
