import React, { Component } from 'react';
import {
  View,
  DrawerLayoutAndroid,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native'
import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/Ionicons'

import { Platform } from 'react-native'
import NavBar from '../NavBar/NavBar'
import DrawerView from '../Drawer/Drawer'
import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'

export default class Layout extends Component {

  constructor(props) {
    super(props)
    
  }

  closeControlPanel = () => {
    return this._drawer.close()
  }
  
  openControlPanel = () => {
    return this._drawer.open()
  }

  render() {

    const navBarItems = <TouchableOpacity onPress={this.openControlPanel}>
        <Icon name={s.icons.menu} size={30} color={s.colors.text.text} style={styles.menu} />
      </TouchableOpacity>

    const androidView = <Drawer
        ref={(ref) => this._drawer = ref}
        content={<DrawerView/>}
        type="overlay"
        openDrawerOffset={100}
        tapToClose={true}
        captureGestures={true}
        acceptPan={true}>
          <NavBar items={navBarItems}/>
          {this.props.view}
      </Drawer>

    const iosView = this.props.view

    const outputView = (Platform.OS === 'ios') 
      ? androidView
      : androidView

    return (
      outputView
    );
  }
}
