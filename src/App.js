import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import TodoItem from './components/todoItem'
import { connect } from 'react-redux'
import { complete, submit } from './redux/reducers/todos'
import Input from './components/Input'

const AppRedux = ({ data, complete, submit }) => {

    const [value, setValue] = useState('')

    const handleChange = (val) => {
        setValue(val)
    }

    const handleSubmit = (value) => {
        submit(value)
        setValue('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de tareas</Text>
            <FlatList 
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <TodoItem todo={item} completed={item.completed} onPress={()=> complete(item.id)} desc={item.desc}/>}
            />
            <Input onChange={handleChange} value={value} onSubmit={ ()=>handleSubmit(value) }/>
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

const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id)),
    submit: (val) => dispatch(submit(val))
})

const mapStateToProps = state => {
    return {data: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux);