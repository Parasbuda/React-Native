import React from "react"
import {Text,StyleSheet} from "react-native"

const ComponentScreen=()=>{
    return <Text style={styles.textStyle}>This is the first component made by me</Text>
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:20,
        color:"red"
    }
})

export default ComponentScreen