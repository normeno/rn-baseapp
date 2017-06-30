import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import Profile from './components/Profile/Profile'
import MapAirbnb from './components/MapAirbnb/MapAirbnb'
import MapBox from './components/MapBox/MapBox'
import Place from './components/Place/Place'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'

export default class veggies extends Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="mapAirbnb" component={MapAirbnb} title='MapAirbnb' hideNavBar/>
        <Scene key="mapBox" component={MapBox} title='MapBox' hideNavBar/>
        <Scene key="productDetail" component={ProductDetail} title='ProductDetail' hideNavBar/>
        <Scene key="productList" component={ProductList} title='ProductList' hideNavBar/>
        <Scene key="login" component={Login} title='Login' hideNavBar />
        <Scene key="place" component={Place} title='Place' hideNavBar/>
        <Scene key="profile" component={Profile} title='Profile' hideNavBar/>
        <Scene key="forgotPassword" component={ForgotPassword} title='Forgot Password' hideNavBar />
        <Scene key="register" component={Register} title='Register' hideNavBar />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('veggies', () => veggies);
