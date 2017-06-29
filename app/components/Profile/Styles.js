import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import s from '../../config/settings'

const styles = StyleSheet.create({
  text: {
    color: s.colors.text.text,
    fontFamily: s.fonts.family,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  /* FIRST CONTAINER */
  firstContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  avatarImg: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: s.colors.divider,
  },
  /* SECOND CONTAINER */
  secondContainer: {
    flex: 0.07,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: s.colors.divider,
    marginTop: -1,
  },
  secondContainerColumn: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRightWidth: 1,
    borderColor: s.colors.divider,
  },
  secondContainerText: {
    marginLeft: 10,
  },
  /* THIRD CONTAINER */
  thirdContainer: {
    flex: 0.1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: s.colors.divider,
  },
  thirdContainerColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /* FOURTH CONTAINER */
  fourthContainer: {
    flex: 0.5,
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
  },
  rowContainerLeft: {
    marginRight: 15,  
  },
  rowImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: s.colors.divider,
  },
  rowContainerRight: {
    flex: 1,
    flexDirection: 'row'
  },
  rowContainerRightText: {
    flex: 0.7,
    justifyContent: 'center',
  },
  rowContainerRightActions: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainerTitle: {
    fontSize: s.fonts.subHeading,
    color: s.colors.text.primary,
    flexWrap: 'wrap',
  },
  rowContainerSubtitle: {
    fontSize: s.fonts.body,
    color: s.colors.text.primary,
    flexWrap: 'wrap',
  },
});

export default styles