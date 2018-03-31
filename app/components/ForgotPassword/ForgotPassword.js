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

export default class ForgotPassword extends Component {

  constructor(props) {
    super(props)

    this.state = {
      send: false  
    }
  }

  _onPressSendEmail = () => {
    this.setState({
      send: true,
    });
  }

  render() {

    let show = (this.state.send)
      ? <Text>
          Te hemos enviado un correo
        </Text>
      : <TextInput
            autoFocus={true}
            keyboardType='email-address'
            maxLength={60}
            placeholder={I18n.t('email')}
          />

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
            
            { show }

            <View style={styles.submitContainer}>
              <Button
                onPress={this._onPressSendEmail}
                title={I18n.t('recoverPassword')}
                color={colors.primary.primary}
              />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}
