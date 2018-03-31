'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';
import isEqual from 'lodash/isEqual';

const accessToken = 'pk.eyJ1Ijoibm9ybWVub2tyZWkiLCJhIjoiY2o0anh5eThlMGViMjJ3cWQ0and4ZWF5YiJ9.8X99vqSMmSELKYdakU0mCA';
Mapbox.setAccessToken(accessToken);

export default class MapBox extends Component {
  
  constructor(props) {
    super(props)
    this.watchLocation()
    
    this.state = {
      center: {
        latitude: null,
        longitude: null
      },
      zoom: 13,
      userTrackingMode: Mapbox.userTrackingMode.none,
      annotations: require('./sampleMarkers.json')
    };
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
          center: {
            latitude: (typeof myPosition.latitude == 'string') ? parseFloat(myPosition.latitude.trim()) : myPosition.latitude,
            longitude: (typeof myPosition.longitude == 'string') ? parseFloat(myPosition.longitude.trim()) : myPosition.longitude,
          }
        });
      }
    }, null, this.props.geolocationOptions);
  }

  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
    console.log('onRegionDidChange', location);
  };
  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
  };
  onUpdateUserLocation = (location) => {
    console.log('onUpdateUserLocation', location);
  };
  onOpenAnnotation = (annotation) => {
    console.log('onOpenAnnotation', annotation);
  };
  onRightAnnotationTapped = (e) => {
    console.log('onRightAnnotationTapped', e);
  };
  onLongPress = (location) => {
    console.log('onLongPress', location);
  };
  onTap = (location) => {
    console.log('onTap', location);
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };

  componentWillMount() {
    this.watchLocation()

    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }

  render() {
    
    let mapView = this.setMapView();
    

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          {mapView}
        </View>
        <View style={styles.optionsContainer}>
          {this._renderButtons()}
        </View>
      </View>
    );
  }

  /**
   * If lat and log is not null, set map
   */
  setMapView = () => {
    const center = this.state.center;
    let mapView;
    if (center.latitude != null && center.longitude != null) {
      mapView = <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={false}
          styleURL={Mapbox.mapStyles.light}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
        />
    } else {
      mapView = <View></View>
    }

    return mapView;
  }

  _renderButtons() {
    return (
      <View>
        <Text onPress={() => this._map && this._map.setCenterCoordinate(-33.442909, -70.653870)}>
          Go To Palacio La Moneda, Chile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  mapContainer: {
    flex: 0.9,
  },
  map: {
    flex: 1
  },
  optionsContainer: {
    flex: 0.1
  },
});