import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
} from 'react-native';

import I18n from './../../i18n/i18n'
import images from '../../config/images'
import colors from '../../config/colors'
import styles from './Styles'

export default class Register extends Component {

  constructor(props) {
    super(props)
  }

  _onPressRegister = () => {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={images.background}  style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={images.logo._300x130}
            />
          </View>
          
          <View style={styles.formContainer}>
            <TextInput
              autoFocus={true}
              keyboardType='default'
              maxLength={60}
              placeholder={I18n.t('name')}
            />

            <TextInput
              autoFocus={true}
              keyboardType='email-address'
              maxLength={60}
              placeholder={I18n.t('email')}
            />

            <TextInput
              autoFocus={true}
              keyboardType='default'
              maxLength={60}
              placeholder={I18n.t('password')}
              secureTextEntry={true}
            />

            <View style={styles.submitContainer}>
              <Button
                onPress={this._onPressRegister}
                title={I18n.t('register')}
                color={colors.primary.primary}
              />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
