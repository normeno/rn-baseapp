import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import s from '../../config/settings'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e8eaed',
    paddingTop: 5,
  },
  /* ROW */
  row: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#7c7c7c',
    backgroundColor: '#FFFFFF',
  },
  rowRight: {
    flexWrap: 'wrap',
  },
  rowImage: {
    height: 75,
    width: 75,
    borderRadius: 0,
    marginRight: 20,
  },
  rowName: {
    fontSize: 16,
    width: 300,
  },
});

export default styles