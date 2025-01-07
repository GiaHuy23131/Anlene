import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
type DataRouteProp = RouteProp<RootStackParamList, 'ScreenPage3'>;
const ScreenPage3 = () => {
    //route
    const route = useRoute<DataRouteProp>();
    const indexCount: Number = route.params;
    console.log('indexCount', indexCount);

    return (
        <LinearGradient
            colors={indexCount === 0 ? ['#0E470E', '#20680D', '#2E820D', '#13500E'] : indexCount === 1 ? ['#FD9500', '#FEBF00', '#FB8402'] : ['#969696', '#969696']}
            style={styles.container}
        >
            <Text>ScreenPage3</Text>
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default ScreenPage3;