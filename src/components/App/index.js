/**
 * Page layout and react-router versin 4 mappings
 */

import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Land from '../LandPage';

import classNames from 'classnames/bind';
import styles from './index.scss';
const cx = classNames.bind(styles);

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    let pathName = window.location.pathname.toLowerCase();
    return (
      <div className={ cx('root-container') }>
        {/* <DrawerConatiner /> */}
        <div className={ cx('page-main') }>
          <Switch>
            <Redirect exact from="/" to="/index" />
            <Route path="/index" component={ Land } />
          </Switch>
        </div>
      </div>
    );
  }
}
