import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/city-background.jpg')}
        style={styles.image}>
        <Text style={[styles.text, styles.cityName]}>London</Text>
        <Text style={[styles.text, styles.countryName]}>UK</Text>
        <View style={styles.populationWrapper}>
          <Ionicons name="people" size={50} color="red" />
          <Text style={styles.populationText}>8000</Text>
        </View>
        <View style={styles.riseSetWrapper}>
          <Feather name="sunrise" size={50} color="white" />
          <Text style={styles.riseSetText}>10:46:58am</Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={styles.riseSetText}>17:26:35pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default City;
