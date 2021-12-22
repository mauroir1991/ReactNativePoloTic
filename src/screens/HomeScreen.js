import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen({ navigation }) {

    const goToSecondScreen = () => {
        console.log('vamos a otra pantalla')
        navigation.navigate('SecondScreen')
    }
    const go3rd = () => {
        console.log('vamos a otra pantalla')
        navigation.navigate('ThirdScreen')
    }
    


    return (
        <View>
            <Text style={{ marginTop: 200, fontSize: 30 }}>Home Screen</Text>
            <Button title='Go to 2nd Screen' onPress={()=> goToSecondScreen()} />
            <Button title='Go to 3rd Screen' onPress={()=> go3rd()} />
        </View>
    )
}
