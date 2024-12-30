import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
//components
import { HeaderComponents } from '../components';
import { appInfo } from '../constains/appInfo';
const ScreenPage2 = () => {
    return (

        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                <HeaderComponents page={'Trang 2/6'} />
                <Text style={[styles.content, { fontSize: 22 , fontWeight: 'bold', marginTop: appInfo.heightWindows * 0.01}]}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>
            </SafeAreaView>

        </LinearGradient>

    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        color: '#FFFFFF',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
});
export default ScreenPage2;