import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'
import Layout from '../Layout/Layout'


export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      heart: false,
      star: false,
      follow: false,
    }
  }

  _onPressHeart = () => {
    this.setState({
      heart: (this.state.heart) ? false : true
    })
  }

  _onPressStar = () => {
    this.setState({
      star: (this.state.star) ? false : true
    })
  }

  _onPressFollow = () => {
    this.setState({
      follow: (this.state.follow) ? false : true
    })
  }

  render() {

    const heart = (this.state.heart) ? s.icons.heart : s.icons.heartOutline
    const star = (this.state.star) ? s.icons.star : s.icons.starOutline
    const follow = (this.state.follow) 
      ? [s.icons.person, I18n.t('notFollow')] 
      : [s.icons.personAdd, I18n.t('follow')]

    const view = <View style={styles.container}>
        
        <Image source={s.images.background}  style={styles.background}>
          
          <View style={styles.firstContainer}>
            <Image
              style={styles.avatarImg}
              source={s.images.defaultAvatar}
            />
            
          </View>
          
          <View style={styles.secondContainer}>
            <TouchableOpacity onPress={this._onPressHeart} style={styles.secondContainerColumn}>
              <Icon name={s.icons.chatBubbles} size={30} color={s.colors.text.text} />
              <Text style={[styles.text, styles.secondContainerText]}>Escribir</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this._onPressFollow} style={styles.secondContainerColumn}>
              <Icon name={follow[0]} size={30} color={s.colors.text.text} />
              <Text style={[styles.text, styles.secondContainerText]}>{follow[1]}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.thirdContainer}>
            <View style={styles.thirdContainerColumn}>
              <TouchableOpacity onPress={this._onPressHeart}>
                <Icon name={heart} size={30} color={s.colors.text.text} />
                <Text style={styles.text}>256</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.thirdContainerColumn}>
              <TouchableOpacity onPress={this._onPressStar}>
                <Icon name={star} size={30} color={s.colors.text.text} />
                <Text style={styles.text}>32</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.thirdContainerColumn}>
              <Icon name={s.icons.chatBubbles} size={30} color={s.colors.text.text} />
              <Text style={styles.text}>1024</Text>
            </View>
          </View>
          
          <View style={styles.fourthContainer}>
            <ScrollView>
              <View style={styles.rowContainer}>
                <View style={styles.rowContainerLeft}>
                  <Image
                    style={styles.rowImg}
                    source={s.images.defaultAvatar}
                  />
                </View>
                <View style={styles.rowContainerRight}>
                  <View style={styles.rowContainerRightText}>
                    <Text style={[styles.text, styles.rowContainerTitle]}
                      numberOfLines={1}>
                        Lorem ipsum
                    </Text>
                    <Text style={[styles.text, styles.rowContainerSubtitle]}
                      numberOfLines={1}>
                      Maecenas tristique enim ut ex volutpat, maximus rutrum dolor suscipit.
                    </Text>
                  </View>
                  <View style={styles.rowContainerRightActions}>
                    <TouchableOpacity onPress={this._onPressHeart}>
                      <Icon name={heart} size={30} color={s.colors.primary.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.rowContainer}>
                <View style={styles.rowContainerLeft}>
                  <Image
                    style={styles.rowImg}
                    source={s.images.defaultAvatar}
                  />
                </View>
                <View style={styles.rowContainerRight}>
                  <View style={styles.rowContainerRightText}>
                    <Text style={[styles.text, styles.rowContainerTitle]}
                      numberOfLines={1}>
                        Lorem ipsum
                    </Text>
                    <Text style={[styles.text, styles.rowContainerSubtitle]}
                      numberOfLines={1}>
                      Maecenas tristique enim ut ex volutpat, maximus rutrum dolor suscipit.
                    </Text>
                  </View>
                  <View style={styles.rowContainerRightActions}>
                    <TouchableOpacity onPress={this._onPressHeart}>
                      <Icon name={heart} size={30} color={s.colors.primary.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.rowContainer}>
                <View style={styles.rowContainerLeft}>
                  <Image
                    style={styles.rowImg}
                    source={s.images.defaultAvatar}
                  />
                </View>
                <View style={styles.rowContainerRight}>
                  <View style={styles.rowContainerRightText}>
                    <Text style={[styles.text, styles.rowContainerTitle]}
                      numberOfLines={1}>
                        Lorem ipsum
                    </Text>
                    <Text style={[styles.text, styles.rowContainerSubtitle]}
                      numberOfLines={1}>
                      Maecenas tristique enim ut ex volutpat, maximus rutrum dolor suscipit.
                    </Text>
                  </View>
                  <View style={styles.rowContainerRightActions}>
                    <TouchableOpacity onPress={this._onPressHeart}>
                      <Icon name={heart} size={30} color={s.colors.primary.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.rowContainer}>
                <View style={styles.rowContainerLeft}>
                  <Image
                    style={styles.rowImg}
                    source={s.images.defaultAvatar}
                  />
                </View>
                <View style={styles.rowContainerRight}>
                  <View style={styles.rowContainerRightText}>
                    <Text style={[styles.text, styles.rowContainerTitle]}
                      numberOfLines={1}>
                        Lorem ipsum
                    </Text>
                    <Text style={[styles.text, styles.rowContainerSubtitle]}
                      numberOfLines={1}>
                      Maecenas tristique enim ut ex volutpat, maximus rutrum dolor suscipit.
                    </Text>
                  </View>
                  <View style={styles.rowContainerRightActions}>
                    <TouchableOpacity onPress={this._onPressHeart}>
                      <Icon name={heart} size={30} color={s.colors.primary.primary} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

        </Image>
      </View>

    return (
      <Layout view={ view } />
    );
  }
}
