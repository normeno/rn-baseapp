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

import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view'
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'
import Layout from '../Layout/Layout'


const MIN_HEIGHT_HEADER = 100
const MAX_HEIGHT_HEADER = 250

export default class ProductDetail extends Component {

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
      <ScrollView overScrollMode='always'>
        <Swiper 
          showsButtons={false}
          bounces={true}
          loop={true}
          autoplay={true}
          autoplayTimeout={5}
          style={styles.wrapper}
          height={MAX_HEIGHT_HEADER}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={{bottom: 0, left: 100, right: 100}} >
          <Image resizeMode='stretch' 
            source={require('../../images/product_01.jpg')} />
          <Image resizeMode='stretch' 
            source={require('../../images/product_02.jpg')} />
          <Image resizeMode='stretch' 
            source={require('../../images/product_03.jpg')} />
        </Swiper>
          
        <View style={styles.firstContainer}>
          <View style={styles.firstContainerLeft}>
            <Text style={[styles.text, styles.title]}>Parque Quinta Normal</Text>
            <Text style={[styles.text, styles.subtitle]}>Parque tracional de Santiago de Chile</Text>
          </View>
          <View style={styles.firstContainerRight}>
            <TouchableOpacity style={styles.firstContainerRightTouch} onPress={this._onPressHeart}>
              <Icon name={heart} size={20} color={s.colors.primary.dark} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.secondContainer}>
          
            <Text style={[styles.text, styles.secondContainerText]}>
              El Parque Quinta Normal es uno tradicional de la ciudad de Santiago en Chile. Ocupa aproximadamente 36 hectáreas con cierre perimetral, siendo el más extenso del sector norponiente de la capital. Fundado en 1841, fue el primero y es considerado el mejor y más bello parque urbano del país. Es conocido popularmente como «la Quinta Normal».
            </Text>

            <Text style={[styles.text, styles.secondContainerText]}>
              El parque fue inaugurado como Quinta Normal de Agricultura, por tres términos: «Quinta» porque se asemeja en tamaño y composición a los fundos que durante la colonización española pagaban un quinto de sus ingresos como tributo. «Normal» alude a la Escuela Normal Superior de París en Francia, ya que comenzó como un centro de enseñanza y estudio, en materia agrícola, por lo que fue agregado «de Agricultura».
            </Text>

            <Text style={[styles.text, styles.secondContainerText]}>
              Está ubicado en la comuna de Quinta Normal, a la cual le da el nombre, pero lo administra la Municipalidad de Santiago por motivos presupuestarios.5 Se emplaza entre las calles Santo Domingo al norte, Matucana al este, Portales al sur y Las Encinas al oeste. La estación Quinta Normal del Metro de Santiago está en su entrada principal.
            </Text>
          
        </View>
      </ScrollView>

    </View>

      

    return (
      <Layout view={ view } />
    );
  }
}
