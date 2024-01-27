import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { weatherType }  from "../utils/weatherType";

function CurrentWeather(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color='black'/>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highlow}>High: 8</Text>
          <Text style={styles.highlow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its Sunny</Text>
        <Text style={styles.message}>{weatherType['Thunderstorm'].message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper:{
    flex:1,
    backgroundColor:'pink'
  },
  temp:{
    color: 'black',
    fontSize: 48
  },
  feels:{
    color: 'black',
    fontSize: 30
  },
  highlow:{
    color: 'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:40
  },
  message:{
    fontSize:30
  }
});

export default CurrentWeather;