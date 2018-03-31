import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import s from '../../config/settings'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: s.colors.text.text
  },
  imgContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: s.colors.accent
  },
  imgAvatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: s.colors.divider,
  },
  itemsContainer: {
    flex: 0.8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
  },
  rowIcon: {
    flex: 0.1,
    alignItems:'center',
    justifyContent:'center',
  },
  rowText: {
    flex: 0.9
  },
});

export default styles