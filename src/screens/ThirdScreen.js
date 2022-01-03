import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ThirdScreen({ navigation }) {

    const goBack = () => {
        navigation.goBack()
    }
    const goHome = () => {
        navigation.navigate('HomeScreen')
    }


    return (
        <View>
            <Text style={{ marginTop: 50, fontSize: 30 }}>3rd Screen</Text>
            <Button title='Go to HomeScreen' onPress={()=> goHome()} />
            <Button title='Go Back' onPress={()=> goBack()} />
        </View>
    )
}
