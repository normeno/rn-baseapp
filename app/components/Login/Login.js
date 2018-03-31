import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import { login } from './Api';
import I18n from './../../i18n/i18n';
import s from '../../config/settings';
import styles from './Styles';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: null,
      password: null,
      emailError: false,
      passError: false,
    }
  }

  _onPressSignIn = () => {
    const {email, password} = this.state
    const emailErrorMsg = <Text style={s.styles.textError}>{I18n.t('error.email.required')}</Text>;
    const passErrorMsg = <Text style={s.styles.textError}>{I18n.t('error.password.required')}</Text>;
    
    (email == null) 
      ? this.setState({emailError: emailErrorMsg}) 
      : this.setState({emailError: false});
    

    (password == null) 
      ? this.setState({passError: passErrorMsg})
      : this.setState({passError: false});

    if (email == null || password == null)
      return;
    
    login(email, password).then(data => {
      if (data.status == 1) {
        global.gUser = data.user
        Actions.productList()
      }
    })
  }

  _onPressRegister = () => {
    Actions.register()
  }

  _onPressForgot = () => {
    Actions.forgotPassword()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={s.images.background}  style={styles.background}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImg}
              source={s.images.logo._300x130}
            />
          </View>
          
          <View style={styles.formContainer}>
            <TextInput
              autoFocus={true}
              keyboardType='email-address'
              maxLength={60}
              placeholder={I18n.t('email')}
              onChangeText={(email) => this.setState({email})}
            />
            {this.state.emailError}

            <TextInput
              keyboardType='default'
              maxLength={60}
              placeholder={I18n.t('password')}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
            />
            {this.state.passError}

            <View style={styles.submitContainer}>
              <Button
                onPress={this._onPressSignIn}
                title={I18n.t('signIn')}
                color={s.colors.primary.primary}
              />
            </View>
          </View>
          
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={this._onPressRegister}>
              <Text>{I18n.t('register')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressForgot}>
              <Text>{I18n.t('forgotPassword')}</Text>
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    );
  }
}
