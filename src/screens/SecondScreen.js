import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SecondScreen({ navigation }) {

    const goTo3 = () => {
        navigation.navigate('ThirdScreen')
    }
    const goHome = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View>
            <Text style={{ marginTop: 200, fontSize: 30 }}>Second Screen</Text>
            <Button title='Go to HomeScreen' onPress={()=> goHome()} />
            <Button title='Go to 3rd Screen' onPress={()=> goTo3()} />
        </View>
    )
}
