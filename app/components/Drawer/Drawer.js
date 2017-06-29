import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress'
import Image from 'react-native-image-progress'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'

export default class Drawer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const avatar = (typeof gUser !== 'undefined' && typeof gUser.avatar != 'undefined') 
      ? <Image 
          style={styles.imgAvatar} 
          source={{ uri: gUser.avatar }}
          indicator={Progress.Bar}
          indicatorProps={{
            size: 30,
            borderWidth: 0,
            color: s.colors.primary.primary,
            unfilledColor: 'rgba(200, 200, 200, 0.2)'
          }} />
      : <Image 
          style={styles.imgAvatar} 
          source={require('../../images/default_avatar.png')}
          indicator={Progress.Bar}
          indicatorProps={{
            size: 30,
            borderWidth: 0,
            color: s.colors.primary.primary,
            unfilledColor: 'rgba(200, 200, 200, 0.2)'
          }} />  
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgContainer}>
            {avatar}
          </View>
          <View style={styles.itemsContainer}>

            <TouchableOpacity style={styles.row} onPress={() => Actions.login()}>
              <Icon name={s.icons.logIn} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('signIn')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => Actions.profile()}>
              <Icon name={s.icons.person} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('profile')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => Actions.productList()}>
              <Icon name={s.icons.list} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('productList')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => Actions.place()}>
              <Icon name={s.icons.cube} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('place')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => Actions.apAirbnb()}>
              <Icon name={s.icons.map} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('map')} Airbnb</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.row} onPress={() => Actions.login()}>
              <Icon name={s.icons.logOut} size={20} 
                color={s.colors.text.primary} style={styles.rowIcon} />
              <Text style={styles.rowText}>{I18n.t('signOut')}</Text>
            </TouchableOpacity>
            
          </View>
        </ScrollView>
      </View>
    );
  }
}
