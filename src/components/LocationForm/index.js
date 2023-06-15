import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as placesDB from '../../constants/db/placesDataBase';

const LocationForm = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [mapRegion, setMapRegion] = useState(null);

  const getLocationAsync = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (error) {
      console.log('Error getting location', error);
    }
  };

  const handleSavePlace = () => {
    if (location) {
      placesDB
        .insertPlace('My Place', '', address, location.coords)
        .then((result) => {
          console.log('Place saved successfully', result);
        })
        .catch((error) => {
          console.log('Error saving place', error);
        });
    }
  };

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setMapRegion({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onPress={handleMapPress}
      >
        {mapRegion && (
          <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
          />
        )}
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
        />
        <Button title="Save Place" onPress={handleSavePlace} />
      </View>
      <Button title="Get Current Location" onPress={getLocationAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  map: {
    flex: 1,
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default LocationForm;
