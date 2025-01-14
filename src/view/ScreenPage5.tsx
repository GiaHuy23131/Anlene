import { StyleSheet, View, Text, TouchableOpacity, Image, Linking, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//comopents
import { HeaderComponents, ButtonComponents } from '../components';
//
import { appColor } from '../constains/appColor';
import { appInfo } from '../constains/appInfo';
//style
import { StyleGlobal } from '../styles/StyleGlobal';
const scale = appInfo.widthWindows / 375;
const adjustedSize = 24 / (appInfo.widthWindows / appInfo.widthWindows);
const normalizeFontSize = (size: any) => Math.round(size * scale);
//type
type Stack = StackNavigationProp<RootStackParamList, "ScreenPage5">
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20207.png?alt=media&token=396baa13-44ec-4e73-bb7b-c2024af3dea1';
const background = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%20Coffee18112%201.png?alt=media&token=37e34a8f-2d6e-40b5-8aa4-3d4fdfaa69c3';
const logoLazada = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Logo%20Lazada%202.png?alt=media&token=3ca19ef5-00f1-4684-9826-2aa0e582a890';
const ScreenPage5 = () => {
    const navigation = useNavigation<Stack>();
    const [loadingImages, setLoadingImages] = useState(true);
    const openLink = () => {
        const url = 'https://www.lazada.vn/shop/fonterra-official-store?tab=promotion&path=promotion-30470-0.htm';
        Linking.openURL(url).catch(err =>
            console.error("Failed to open URL:", err)
        );
    };
    useEffect(() => {
        // Tải hình ảnh và theo dõi trạng thái
        const prefetchImages = async () => {
            try {
                // Tạo một mảng các promise để tải hình ảnh
                const images = [background, anlene];
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
            {/* LinearGradient đầu tiên */}
            <LinearGradient
                colors={appColor.colorBackgroundTop}
                locations={[0.0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                style={[styles.gradient, { flex: 0.5 }]}
            >
        <SafeAreaView style={StyleGlobal.containerArea}>

                    <HeaderComponents page={'Trang 5/6'} />
                    <Image source={{ uri: anlene }}
                        height={normalizeFontSize(appInfo.heightWindows * 0.03)}
                        width={normalizeFontSize(appInfo.widthWindows * 0.5)}
                        resizeMode="contain"
                        style={{ marginTop: appInfo.heightWindows * 0.01, marginBottom: appInfo.heightWindows * 0.01 }} />
                    <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(22), fontWeight: 'bold', color: appColor.yellow }]}>CHĂM SÓC CƠ-XƯƠNG-KHỚP</Text>
                    <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(18), fontWeight: 'bold', color: appColor.yellow }]}>NHẬN LỘC SỨC KHỎE TỪ ANLENE</Text>
                    <View style={{ marginTop: appInfo.heightWindows * 0.01, alignItems: 'flex-start' }}>
                        <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(12), fontWeight: 'bold' }]}>ANLENE LÌ XÌ NGAY 100.000đ KHI ĐẶT MUA HÔM NAY!</Text>
                        <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(12) }]}>Hạn sử dụng: 25/07/2021 - 31/07/2021</Text>
                    </View>

                </SafeAreaView>
            </LinearGradient>
            {
                loadingImages ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={appColor.white} />
                    </View>
                ) : (
                    <Image
                        source={{ uri: background }}
                        resizeMode="cover"
                        style={[styles.image, { flex: 1 }]}
                    />
                )}
            {/* LinearGradient cuối cùng */}
            <LinearGradient
                colors={appColor.colorBackgroundBottom}
                locations={[0.0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                style={[styles.gradient, { flex: 0.5 }]}
            > 
                <SafeAreaView style={[StyleGlobal.containerArea, { marginTop: '-11%' }]}>
                    <View style={styles.containerVoucher}>
                        <View style={styles.voucher}>
                            <Text style={{ color: '#73A442', fontSize: normalizeFontSize(10) }}>MÃ GIẢM GIÁ</Text>
                            <Text style={{ fontWeight: 'bold', color: '#478449', fontSize: normalizeFontSize(16) }}>ANLENANMUMW88</Text>
                        </View>

                        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 20 }} >
                            <Text style={{ fontWeight: 'bold', color: appColor.yellow, fontSize: normalizeFontSize(15) }}>ÁP DỤNG TẠI</Text>
                            <Image source={{ uri: logoLazada }} style={styles.logoLazada} resizeMode='contain' />
                        </View>
                    </View>
                    <ButtonComponents text='MUA NGAY' customStyles={styles.buttonConfirm} onPress={() => openLink()} />
                    <TouchableOpacity style={styles.btnDetail} onPress={() => navigation.navigate("ScreenPage6")}>
                        <Text style={{ fontWeight: 'bold', color: '#73A442', fontSize: normalizeFontSize(16) }}>Tìm Hiểu Ngay</Text>
                    </TouchableOpacity>
                    <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(9), marginTop: appInfo.heightWindows * 0.01 }]}>
                        * Voucher chỉ áp dụng cho đơn hàng mua các sản phẩm Anlene Gold 3X, Anlene Gold 5X tại gian hàng Fonterra Official Retail Store trên Lazada
                    </Text>
                    <Text style={[StyleGlobal.content, { fontSize: normalizeFontSize(9), marginTop: appInfo.heightWindows * 0.01 }]}>
                        * Voucher chỉ áp dụng cho đơn hàng có giá trị từ 200.000đ
                    </Text>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    gradient: {
        width: '100%', // Chiều rộng toàn màn hình
        zIndex: 1,
    },
    image: {
        width: '100%', // Chiều rộng toàn màn hình
        marginTop: '-20%',
        marginBottom: '-10%',
    },
    title: {
        fontSize: normalizeFontSize(20),
        color: '#BA872C',
        fontWeight: 'bold',
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
    textContent: {
        marginTop: appInfo.heightWindows * 0.02,
        fontSize: normalizeFontSize(10.5),
        color: appColor.white,
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    voucher: {
        paddingTop: '3%',
        width: '100%',
        alignItems: 'center',
        backgroundColor: appColor.white,
        zIndex: 1,
    },
    containerVoucher: {
        width: appInfo.widthWindows * 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: appColor.white,
        borderRadius: 6,
        zIndex: 1,
    },
    logoLazada: {
        width: appInfo.widthWindows * 0.22,
        height: appInfo.heightWindows * 0.05,
    },
    buttonConfirm: {
        marginTop: appInfo.heightWindows * 0.01,
        backgroundColor: appColor.red,
    },
    btnDetail: {
        borderRadius: 24,
        borderWidth: 1.5,
        borderColor: '#73A442',
        backgroundColor: appColor.white,
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '1%',
        paddingBottom: '1%',
        marginTop: appInfo.heightWindows * 0.01,
    },
});
export default ScreenPage5;