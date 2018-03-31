import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  ListView,
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons'

import { getProducts } from './Api'
import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'
import Layout from '../Layout/Layout'
import Row from './ProductRow'
const URL = 'http://www.api.veggie.normeno.com/api'
export default class Login extends Component {

  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    this.state = {
      dataSource: ds,
      products: null,
      loading: true,
    }
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    getProducts().then(products => {
      this.updateDataSource(products)
    })
  }

  /**
  * Check if data is array
  */
  isArray = (el) => {
    return Object.prototype.toString.call(el) === '[object Array]';
  }

  updateDataSource = (data) => {
    const lvData = (this.isArray(data)) ? data : [data]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(lvData),
      loading: false
    })
  }

  render() {

    const view =
      <View style={[s.styles.containerTotal, styles.container]}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => {
            return (
              <TouchableOpacity onPress={() => Actions.productDetail({data})}>
                <Row {...data} />
              </TouchableOpacity>
            )
          }}
        />
      </View>

      return (<Layout view={ view } />)
  }
}
