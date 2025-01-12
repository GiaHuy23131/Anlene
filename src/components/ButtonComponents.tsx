import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
//containts
import { appInfo } from '../constains/appInfo';
type ButtonProps = {
    text: string,
    customStyles?: any,
    disabled?: boolean,
    onPress?: () => void,
}
const scale = appInfo.widthWindows / 375;

const normalizeFontSize = (size: any) => Math.round(size * scale);
const ButtonComponents = ({text, customStyles, disabled, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button,customStyles]} disabled={disabled} onPress={onPress}>
      <Text style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: normalizeFontSize(20)}}>{text}</Text>
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