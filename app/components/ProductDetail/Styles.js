import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import s from '../../config/settings'

const styles = StyleSheet.create({
  /* HEADER */
  dot: {
    backgroundColor: 'rgb(170,170,170)', 
    width: 7, 
    height: 7, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: '#FFFFFF', 
    width: 9, 
    height: 9, 
    borderRadius: 4, 
    marginLeft: 3, 
    marginRight: 3, 
    marginTop: 3, 
    marginBottom: 3
  },
  /* GENERAL */
  text: {
    color: s.colors.text.primary,
    fontFamily: s.fonts.family,
  },
  container: {
    flex: 1,
  },
  /* FIRST CONTAINER */
  title: {
    fontSize: s.fonts.appBar,
  },
  subtitle: {
    fontSize: s.fonts.subHeading,
  },
  firstContainer: {
    padding: 15,
    flexDirection: 'row',
  },
  firstContainerLeft: {
    flex: 0.8,
  },
  firstContainerRight: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstContainerRightTouch: {
    //borderWidth: 1,
    //borderColor: s.colors.primary.dark,
    //borderRadius: 50,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    //marginTop: -80,
    marginLeft: 30,
    zIndex: 1,
    backgroundColor: '#FFFFFF'
  },
  secondContainer: {
    padding: 15,
    flexDirection: 'column',
  },
  secondContainerText: {
    marginBottom: 10,
    textAlign: 'justify',
  }
});

export default styles