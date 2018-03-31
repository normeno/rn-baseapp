import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: 300,
    height: 120,
  },
  formContainer: {
    flex: 0.4,
    paddingLeft: 25,
    paddingRight: 25,
  },
  submitContainer: {
    marginTop: 20,
  },
  actionsContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles