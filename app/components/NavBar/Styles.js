import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import s from '../../config/settings'

const styles = StyleSheet.create({
  container: {
    flex: 0.06,
    backgroundColor: s.colors.primary.light,
    paddingLeft: 15,
    paddingTop: 5,
  },
});

export default styles