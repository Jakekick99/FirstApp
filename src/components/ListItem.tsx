import React from "react";
import { View, Text, StyleSheet} from "react-native";
import Feather from "react-native-vector-icons/Feather";

const ListItem = (props : {dt_txt:string, min: number, max: number, condition:string}) =>{
    const {dt_txt, min, max} = props;
    const {item, date, temp} = styles;
    return (
        <View style={item}>
            <Feather name={"sun"} size={50} color={'white'}/>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'
    }
})

export default ListItem