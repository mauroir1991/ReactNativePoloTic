import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ onChange, value, onSubmit}) {
  return (
        <TextInput onSubmitEditing={onSubmit} onChangeText={onChange} value={value} style={styles.input} />
  );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#e0d0d0',
        height: 40,
        alignSelf: 'stretch',
        padding: 8
    }
})
