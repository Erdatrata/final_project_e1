import React, { Component } from 'react';
import { StyleSheet, 
	Button, 
	Text, 
	View, 
	TextInput, 
	ImageBackground, 
	ActivityIndicator, 
	Linking, 
	TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// import getDirections from 'react-native-google-maps-directions'


import flagBlueImg from '../assets/map_marker.png';
const isValidLatLng = (num, range) => typeof num === 'number' && num <= range && num >= -1 * range

const isValidCoordinates = coords =>
  isValidLatLng(coords.latitude, 90) && isValidLatLng(coords.longitude, 180)

const getParams = (params = []) => {
  return params
    .map(({ key, value }) => {
      const encodedKey = encodeURIComponent(key)
      const encodedValue = encodeURIComponent(value)
      return `${encodedKey}=${encodedValue}`
    })
    .join('&')
}

const getWaypoints = (waypoints = []) => {
  if (waypoints.length === 0) {
    return ''
  }

  const params = waypoints
    .map(value => `${value.latitude},${value.longitude}`)
    .join('|')

  return `&waypoints=${params}`
}

function getDirections ({ destination, source, params = [], waypoints = [] } = {}) {
  if (destination && isValidCoordinates(destination)) {
    params.push({
      key: 'destination',
      value: `${destination.latitude},${destination.longitude}`
    })
  }

  if (source && isValidCoordinates(source)) {
    params.push({
      key: 'origin',
      value: `${source.latitude},${source.longitude}`
    })
  }

  const url = `https://www.google.com/maps/dir/?api=1&${getParams(
    params
  )}${getWaypoints(waypoints)}`
  return url
}



let Container = styled(View) `
	width: 100%;
	height: 100%;
	background-color: white;
`;

let Map = styled(MapView) `
	width: 100%;
	height: 100%;
`;

const origin = { latitude: 31.74454030107937, longitude: 34.98723725663177 };
const destination = { latitude:32.02041458492151, longitude: 34.7733842633785 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyBz54UfZ7G9RYlXlkyQ_foh75y6fhMGtC8';

export default class extends Component {

	constructor() {
		super();
	}

	handleGetDirections = () => {		
		const data = {
			destination,
			params: [
				{
					key: "dirflg",
					value: "d"
				}
			]
		} 

 
   return getDirections(data);
	}

	pressed(e) {
		console.log('pressed');
		
	}

	render() {
		return (
			<Container>
				<Map
					initialRegion={{
				    latitude: 32.02065081278995,
            longitude:34.771281264084394,
            latitudeDelta:  32.02041458492151,
            longitudeDelta:34.7733842633785,
					}}
				>
					<MapView.Marker
						coordinate={destination}
						image={flagBlueImg}
					>
						<MapView.Callout onPress={() => {
							console.log('Press to Get Direction');      
              Linking.openURL(this.handleGetDirections());
					    
						}}>
							<Text>Press to Get Direction</Text>
						</MapView.Callout>
					</MapView.Marker>
					<MapViewDirections
						origin={origin}
						destination={destination}
						apikey={GOOGLE_MAPS_APIKEY}
					/>

				</Map>
			</Container>
		);
	}
}