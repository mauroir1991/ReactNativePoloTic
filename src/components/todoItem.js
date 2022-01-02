import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

function TodoItem({ desc, onPress, completed }){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{desc}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        height: 50
    },
    text:{
        fontSize: 20
    },
    textCompleted:{
        fontSize: 20
    }
})

export default TodoItem;