import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Counter = () =>{
    const [count, setCount] = useState(0)
    const [newCount, setNewCount] = useState(0)
    useEffect(() => {
        console.log(`Count changed, not New Count`)
    },[count])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {`Count: ${count}`}
            </Text>
            <Button
                color={'green'}
                title={'Increase the count'}
                onPress={() =>{
                    setCount(count+1)
                    console.log(count)
                }}
            />
            <Button
                color={'red'}
                title={'Decrease the count'}
                onPress={() =>{
                    setCount(count-1)
                    console.log(count)
                }}
            />
            <Button
                color={'green'}
                title={'Increase the New count'}
                onPress={() =>{
                    setNewCount(newCount+1)
                    console.log(newCount)
                }}
            />
            <Button
                color={'red'}
                title={'Decrease the New count'}
                onPress={() =>{
                    setNewCount(newCount-1)
                    console.log(newCount)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'orange'
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginTop:25
    }
})

export default Counter