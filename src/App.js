import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import TodoItem from './components/todoItem'
import { connect } from 'react-redux'

const AppRedux = ({ data }) => {
    console.log(data)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de tareas</Text>
            <FlatList 
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <TodoItem todo={item} completed={item.completed} onPress={()=> console.log(item.id)} desc={item.desc}/>}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        marginTop: 150,
        alignItems: 'center'
    },
    text:{
        fontSize: 20
    }
})

const mapStateToProps = state => {
    return {data: state.todos}
}

export default connect(mapStateToProps)(AppRedux);