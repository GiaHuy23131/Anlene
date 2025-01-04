import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
type ButtonProps = {
    text: string,
    customStyles?: any,
    disabled?: boolean,
    onPress?: () => void,
}
const ButtonComponents = ({text, customStyles, disabled, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button,customStyles]} disabled={disabled} onPress={onPress}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 20}}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        padding: 10,
        paddingLeft: 35,
        paddingRight: 35,
        borderRadius: 90,
    }
})
export default ButtonComponents