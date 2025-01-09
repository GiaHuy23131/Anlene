import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { TSpan } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
//style
import { StyleGlobal } from '../styles/StyleGlobal';
//containts
import { appInfo } from '../constains/appInfo';
//components
import { HeaderComponents, TitleComponennts, ButtonComponents } from '../components';
//type
type Stack = StackNavigationProp<RootStackParamList, "ScreenPage1">
//
const background = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fbg.png?alt=media&token=6d0b21ef-8081-4b5e-b3f5-a793aa32bca3';
const union2 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FUnion%20(2).png?alt=media&token=404f76ce-701f-4941-b9bd-62824b22bf66';
const union1 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FUnion%20(1).png?alt=media&token=cd304b7c-e0fd-4b4a-a185-c2dbca6c6ae5';
const free = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fvoucher.png?alt=media&token=024dc6c8-8fe5-4659-94d1-c3f68ba9481c';
const voucher = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Ffree.png?alt=media&token=2f239423-55dd-4316-a524-dfbf9f41e4f5';
const fiveMinutes = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FCh%E1%BB%89%205%20ph%C3%BAt.png?alt=media&token=87b1e11f-09b7-44db-b57f-2f3029f12e9c';
const scale = appInfo.widthWindows / 375;

const normalizeFontSize = (size: any) => Math.round(size * scale);
const ScreenPage1 = () => {
    const navigation = useNavigation<Stack>();
    return (
        <>
            <ImageBackground source={{ uri: background }} style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <ImageBackground source={{ uri: union1 }} style={{ height: appInfo.heightWindows * 0.35, width: '100%' }}>
                        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
                            <HeaderComponents page={'Trang 1/6'} isCheck={true} />
                            <View style={styles.container}>
                                <Text style={[styles.content, styles.title]}>TẾT BẬN RỘN</Text>
                                <Text style={[styles.content, styles.title]}>CƠ-XƯƠNG-KHỚP CÓ KHOẺ</Text>
                                <Text style={[styles.content, styles.title]}>ĐỂ CHU TOÀN?</Text>
                                <Text
                                    style={[
                                        styles.content,
                                        { fontSize: normalizeFontSize(14), marginTop: appInfo.heightWindows * 0.01 },
                                    ]}
                                >
                                    Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
                                </Text>
                                <Text
                                    style={[
                                        styles.content,
                                        { fontSize: normalizeFontSize(14), marginTop: appInfo.heightWindows * 0.01 },
                                    ]}
                                >
                                    Ngay lúc này,
                                    <Text style={{ color: '#E8E276' }}> hãy Kiểm tra Sức khoẻ Cơ-Xương-Khớp
                                    </Text>{' '}
                                    cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, trọn vẹn niềm vui.
                                </Text>
                            </View>
                        </SafeAreaView>
                    </ImageBackground>
                    <ButtonComponents text='KIỂM TRA NGAY' customStyles={{ marginTop: 'auto', borderRadius: 90, borderWidth: 3, borderColor: '#FFC200', backgroundColor: '#B70002', }}
                        onPress={() => navigation.navigate("ScreenPage2")} />
                </View>
            </ImageBackground>
            <ImageBackground source={{ uri: union2 }} style={{ flex: 0.3 }} >
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                            style={styles.button}>
                            <Image style={styles.image} source={{ uri: free }} resizeMode="contain" />

                        </LinearGradient>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                            style={styles.button}>
                            <Image style={styles.image} source={{ uri: fiveMinutes }} resizeMode="contain" />
                        </LinearGradient>
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#FFC200', '#F1ED86', '#ECD24A', '#ECD24A', '#FFC200']}
                            style={styles.button}>
                            <Image source={{ uri: voucher }} style={styles.image} resizeMode="contain" />
                        </LinearGradient>
                    </View>
                    <Text style={styles.textContent}>Bài kiểm tra Cơ, Xương, Khớp này được phát triển bởi đội ngũ Anlene</Text>

                    <Text style={[styles.textContent, { marginLeft: '5%', marginRight: '5%' }]}>Lưu ý: Bài kiểm tra không dành cho đối tượng đang bị chấn thương hoặc có bệnh lý về cơ, xương, khớp hoặc tiểu đường </Text>


                </View>
            </ImageBackground>
        </>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '3%',
        alignItems: 'center',
    },
    title: {
        fontSize: normalizeFontSize(25),
        color: '#BA872C',
        fontWeight: 'bold',
    },
    content: {
        color: '#FFFFFF',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 20,
        width: appInfo.widthWindows * 0.23,
        height: appInfo.heightWindows * 0.07,
    },
    textButton: {
        backgroundColor: 'transparent',
        fontSize: 17,
        color: '#478449',
        fontWeight: 'bold',
    },
    image: {
        width: '100%', // Kích thước ảnh dựa trên nút
        height: '100%',
    },
    textContent: {
        marginTop: appInfo.heightWindows * 0.02,
        fontSize: normalizeFontSize(10.5),
        color: '#FFFFFF',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
});
export default ScreenPage1;