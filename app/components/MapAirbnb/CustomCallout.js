import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import I18n from './../../i18n/i18n'
import s from '../../config/settings'

class CustomCallout extends React.Component {

  render() {
    
    let markerInfo = this.props.info

    return (
      
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>

          <Image source={{uri: markerInfo.image}} style={styles.infoImage}/>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, styles.infoTitle]}>{markerInfo.title}</Text>
            <Text style={[styles.text, styles.infoDesc]}>{markerInfo.desc}</Text>
            <Text style={[styles.text, styles.infoDesc, styles.infoViewDetails]}
               onPress={() => Actions.product()}>
              {I18n.t('viewDetail')}
            </Text>
          </View>
          
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: s.fonts.family,
    textAlign: 'justify',
    color: s.colors.text.text,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  bubble: {
    flex: 1,
    backgroundColor: s.colors.primary.dark
    /*flexDirection: 'row',
    backgroundColor: '#4da2ab',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,*/
  },
  infoImage: {
    width: 300,
    height: 100,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  infoTitle: {
    fontSize: s.fonts.subHeading,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'justify',
  },
  infoDesc: {
    textAlign: 'justify',
    fontSize: s.fonts.body,
  },
  infoViewDetails: {
    marginTop: 15,
  }
  /*amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },*/
});

module.exports = CustomCallout;