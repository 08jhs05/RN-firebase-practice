import React from 'react';
import { View, Pressable, Alert, StyleSheet, Text } from 'react-native';

export default function FoodList(props) {
    return (
    <View>
        <Pressable 
            style={styles.button}
            onPress={props.onclick}
        >
            <Text style={styles.buttonText}>Click me</Text>
        </Pressable>
    </View>);
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00827F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20
    },
    buttonText: {
        color: 'white'
    }
})