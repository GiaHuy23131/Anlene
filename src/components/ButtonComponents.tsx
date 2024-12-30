import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type ButtonProps = {
    text: string,
    customStyles?: any,
    onPress?: () => void,
}
const ButtonComponents = ({text, customStyles, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button,customStyles]} onPress={onPress}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B70002',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 90,
        borderWidth: 3,
        borderColor: '#FFC200',
    }
})
export default ButtonComponents