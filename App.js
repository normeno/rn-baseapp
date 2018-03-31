import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';

import Login from './app/components/Login/Login';
import Register from './app/components/Register/Register';
import ForgotPassword from './app/components/ForgotPassword/ForgotPassword';
import Profile from './app/components/Profile/Profile';
import MapAirbnb from './app/components/MapAirbnb/MapAirbnb';
//import MapBox from './app/components/MapBox/MapBox';
import Place from './app/components/Place/Place';
import ProductList from './app/components/ProductList/ProductList';
import ProductDetail from './app/components/ProductDetail/ProductDetail';

export default class veggies extends Component {
  // <Scene key="mapBox" component={MapBox} title='MapBox' hideNavBar/>
  render() {
    return <Router>
      <Scene key="root">
      <Scene key="productDetail" component={ProductDetail} title='ProductDetail' hideNavBar/>
        <Scene key="mapAirbnb" component={MapAirbnb} title='MapAirbnb' hideNavBar/>
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