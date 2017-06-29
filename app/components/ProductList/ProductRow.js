import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import * as Progress from 'react-native-progress'
import Image from 'react-native-image-progress'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'
import styles from './Styles'
import Layout from '../Layout/Layout'

const ProductRow = (props) => (
  <View style={styles.row}>
    <Image
      source={{ uri: `${props.image}?r=${Math.random()}`}} style={styles.rowImage}
      indicator={Progress.Bar}
      indicatorProps={{
        size: 30,
        borderWidth: 0,
        color: s.colors.primary.primary,
        unfilledColor: 'rgba(200, 200, 200, 0.2)'
      }} />
    <View style={styles.rowRight}>
      <Text style={[s.styles.textTitle]}>
        {`${props.title}`}
      </Text>
      <Text style={[s.styles.textSubtitle]}>
        {I18n.t('rating')} {props.rating}
      </Text>
    </View>
  </View>
);

export default ProductRow;
