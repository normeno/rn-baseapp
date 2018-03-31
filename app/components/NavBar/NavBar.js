import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { Platform } from 'react-native'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'

export default class NavBar extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const androidView = <View style={styles.container}>
        {this.props.items}
      </View>

    const view = (Platform.OS === 'ios') 
      ? androidView
      : androidView


    return (
      view
    );
  }
}
