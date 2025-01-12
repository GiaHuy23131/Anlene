import { StyleSheet, Text, View, ImageBackground, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
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
const free = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fvoucher.png?alt=media&token=024dc6c8-8fe5-4659-94d1-c3f68ba9481c';
const voucher = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Ffree.png?alt=media&token=2f239423-55dd-4316-a524-dfbf9f41e4f5';
const fiveMinutes = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FCh%E1%BB%89%205%20ph%C3%BAt.png?alt=media&token=87b1e11f-09b7-44db-b57f-2f3029f12e9c';
const scale = appInfo.widthWindows / 375;

const normalizeFontSize = (size: any) => Math.round(size * scale);
const ScreenPage1 = () => {
    const navigation = useNavigation<Stack>();
    const [loadingImages, setLoadingImages] = useState(true);
    useEffect(() => {
        // Tải hình ảnh và theo dõi trạng thái
        const prefetchImages = async () => {
            try {
                // Tạo một mảng các promise để tải hình ảnh
                const images = [background, free, voucher, fiveMinutes];
                await Promise.all(
                    images.map((image) =>
                        Image.prefetch(image).catch((error) => {
                            console.error(`Error prefetching image ${image}:`, error);
                            return null; // Không dừng cả quá trình nếu có lỗi với một ảnh
                        })
                    )
                );
                setLoadingImages(false); // Hình ảnh tải xong
            } catch (error) {
                console.error('Error prefetching images:', error);
            }
        };

        prefetchImages();
    }, []);
    return (
        <View style={[styles.container, { backgroundColor: '#27750D', }]}>
            {
                loadingImages ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#FFFFFF" />
                    </View>
                ) : (
                    <>

                        {/* LinearGradient đầu tiên */}
                        <LinearGradient
                            colors={[
                                '#0E470E',
                                '#1F660D',
                                '#20680D',
                                '#236E0D',
                                '#27750D',
                                'rgba(46, 130, 13, 0)',
                            ]}
                            locations={[0.0, 0.2, 0.4, 0.6, 0.9, 1.0]}
                            style={[styles.gradient, { flex: 0.55 }]}
                        >

                            <SafeAreaView style={styles.containerArea}>
                                <HeaderComponents page={'Trang 1/6'} isCheck={true} />
                                <View style={styles.container}>
                                    <Text style={[styles.content, styles.title]}>TẾT BẬN RỘN</Text>
                                    <Text style={[styles.content, styles.title]}>CƠ-XƯƠNG-KHỚP CÓ KHOẺ</Text>
                                    <Text style={[styles.content, styles.title]}>ĐỂ CHU TOÀN?</Text>
                                    <Text
                                        style={[
                                            styles.content,
                                            { fontSize: normalizeFontSize(13), marginTop: appInfo.heightWindows * 0.005 },
                                        ]}
                                    >
                                        Trăm công nghìn việc dịp cận Tết mà cơ thể nhức mỏi, làm sao chu toàn?
                                    </Text>
                                    <Text
                                        style={[
                                            styles.content,
                                            { fontSize: normalizeFontSize(13), marginTop: appInfo.heightWindows * 0.005 },
                                        ]}
                                    >
                                        Ngay lúc này,
                                        <Text style={{ color: '#E8E276' }}> hãy Kiểm tra Sức khoẻ Cơ-Xương-Khớp
                                        </Text>{' '}
                                        cùng Anlene để Tết này cả nhà vui khoẻ đón Tết, trọn vẹn niềm vui.
                                    </Text>
                                </View>
                            </SafeAreaView>
                        </LinearGradient>
                        {/* Hình ảnh */}
                        <ImageBackground
                            source={{ uri: background }}
                            resizeMode="cover"
                            style={[styles.imageBackground, { flex: 1.4 }]}
                        >
                            <ButtonComponents text='KIỂM TRA NGAY' customStyles={styles.btnCheck}
                                onPress={() => navigation.navigate("ScreenPage2")} />
                        </ImageBackground>

                        {/* LinearGradient cuối cùng */}
                        <LinearGradient
                            colors={[
                                'rgba(46, 130, 13, 0)',
                                '#27750D',
                                '#236E0D',
                                '#20680D',
                                '#1F660D',
                                '#0E470E',
                            ]}
                            locations={[0.0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                            style={[styles.gradient, { flex: 0.4 }]}
                        >
                            <View style={[styles.container, { marginTop: appInfo.heightWindows * 0.03 }]}>
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
                        </LinearGradient>
                    </>
                )
            }
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    containerArea: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: appInfo.widthWindows * 0.05,
        paddingRight: appInfo.widthWindows * 0.05
    },
    gradient: {
        width: '100%', // Chiều rộng toàn màn hình
        zIndex: 1,
    },
    title: {
        fontSize: normalizeFontSize(24),
        color: '#ECD24A',
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
    imageBackground: {
        width: '100%', // Chiều rộng toàn màn hình
        alignItems: 'center',
        marginTop: '-80%',
        // marginBottom: '-10%',
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
    btnCheck: {
        marginTop: 'auto',
        borderRadius: 30,
        borderWidth: 1.5,
        borderColor: '#ECD24A',
        backgroundColor: '#B70002',
        alignItems: 'center',
        width: '60%',
        zIndex: 1,
        marginBottom: '-4%',
    },
});
export default ScreenPage1;