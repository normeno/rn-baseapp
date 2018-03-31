import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import MapView from 'react-native-maps'
import isEqual from 'lodash/isEqual'

import CustomCallout from './CustomCallout';
import s from '../../config/settings'
import Layout from '../Layout/Layout'
import styles from './Styles'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default class MyMap extends Component {
  constructor(props) {
    super(props);

    this.watchLocation()

    this.state = {
      myPosition: null,
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: require('./sampleMarkers.json')
    };

    //console.warn('markers', this.state.markers)
  }

  componentDidMount() {
    this.watchLocation()
  }

  watchLocation() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const myLastPosition = this.state.myPosition;
      const myPosition = position.coords;
      // Compare stored location with current location
      if (!isEqual(myPosition, myLastPosition)) {
        this.setState({ 
          myPosition,
          region: {
            latitude: (typeof myPosition.latitude == 'string') ? parseFloat(myPosition.latitude.trim()) : myPosition.latitude,
            longitude: (typeof myPosition.longitude == 'string') ? parseFloat(myPosition.longitude.trim()) : myPosition.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      }
    }, null, this.props.geolocationOptions);
  }

  show() {
    this.marker1.showCallout();
  }

  hide() {
    this.marker1.hideCallout();
  }

  onPressViewDetails () {    
    console.warn('asdf')
  }

  /**
   * Format coordinates to float
   */
  formatCoordinate = (coordinate) => {
    if (typeof coordinate.latitude == 'string' || typeof coordinate.longitude == 'string') {
      coordinate = {
        latitude: parseFloat(coordinate.latitude.trim()),
        longitude: parseFloat(coordinate.longitude.trim())
      }
    }

    return coordinate
  }

  /**
   * Generate marker
   */
  handleMarker = () => {
    const listMarkers = this.state.markers.map((m, k) =>
      <MapView.Marker
        key={`marker_${k}`}
        coordinate={this.formatCoordinate(m.coordinate)}
        calloutOffset={{ x: -8, y: 28 }}
        calloutAnchor={{ x: 0.5, y: 0.4 }}
      >  
        <MapView.Callout tooltip style={styles.mapViewCallout}>  
          <CustomCallout info={m.info}/>
        </MapView.Callout>
      </MapView.Marker>
    )

    return listMarkers
  }

  render() {
    const { region, markers } = this.state;

    if (region.latitude == null || region.latitude == null)
      return (<View><Text>Cargando...</Text></View>)

    const listMarkers = this.handleMarker()

    const view =  <View style={styles.container}>
                    <MapView
                      provider={this.props.provider}
                      style={styles.map}
                      initialRegion={region}
                    >
                      {listMarkers}
                    </MapView>
                  </View>
    
    const view2 = <View></View>

    return (
      <Layout view={ view } />
    );
  }
}
