import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
//comopents
import { HeaderComponents } from '../components';
//
import { appInfo } from '../constains/appInfo';
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20207.png?alt=media&token=396baa13-44ec-4e73-bb7b-c2024af3dea1';
const anleneMilk = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Group%20310.png?alt=media&token=d1084778-d1da-450c-8239-cc958f0467fb';
const xuong = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fco%20CX-02.png?alt=media&token=ae032a75-6068-45f2-b536-cffbcee1d7b1';
const co = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fco%20CX-03.png?alt=media&token=de49f3e2-0a80-4554-a4b5-be576d8c10e6';
const khop = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2Fco%20CX-04.png?alt=media&token=8a46258b-c8dd-492b-8fe2-be040fb1a263';
const scale = appInfo.widthWindows / 375;
const adjustedSize = 24 / (appInfo.widthWindows / appInfo.widthWindows);
const normalizeFontSize = (size: any) => Math.round(size * scale);
const ScreenPage6 = () => {
    const [loadingImages, setLoadingImages] = useState(true);
    useEffect(() => {
        // Tải hình ảnh và theo dõi trạng thái
        const prefetchImages = async () => {
            try {
                // Tạo một mảng các promise để tải hình ảnh
                const images = [anlene, anleneMilk, xuong, co, khop];
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
        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.container}
        >
            {
                loadingImages ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#FFFFFF" />
                    </View>
                ) : (
                    <SafeAreaView style={styles.containerArea}>
                        <HeaderComponents page={'Trang 6/6'} />
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.container}>

                                <Image source={{ uri: anlene }}
                                    height={normalizeFontSize(appInfo.heightWindows * 0.03)}
                                    width={normalizeFontSize(appInfo.widthWindows * 0.5)}
                                    resizeMode="contain"
                                    style={{ marginTop: appInfo.heightWindows * 0.01, marginBottom: appInfo.heightWindows * 0.01 }} />
                                <Text style={[styles.content, { fontSize: normalizeFontSize(24), fontWeight: 'bold', color: '#ECD24A' }]}>THÔNG TIN SẢN PHẨM</Text>
                                <Text style={[styles.content, { fontSize: normalizeFontSize(18), fontWeight: 'bold', color: '#ECD24A' }]}>SỮA ANLENE 3 KHỎE</Text>
                                <Image source={{ uri: anleneMilk }} style={styles.imageAnlenMilk} resizeMode='contain' />
                                <Text style={[styles.content, { fontSize: normalizeFontSize(14) }]}
                                >Uống 2 ly Anlene mỗi ngày để bổ sung dinh dưỡng, tăng cường đề kháng đồng thời duy trì thói quen tập thể dục mỗi ngày để giúp hệ Cơ-Xương-Khớp chắc khoẻ, thoải mái tận hưởng cuộc sống năng động, chẳng ngại “rào cản” tuổi tác.</Text>
                                <View style={styles.frame}>
                                    <Image source={{ uri: xuong }} style={styles.image} resizeMode='contain' />
                                </View>
                                <View style={styles.frame}>
                                    <Image source={{ uri: co }} style={styles.image} resizeMode='contain' />
                                </View>
                                <View style={[styles.frame, { marginBottom: appInfo.heightWindows * 0.02, }]}>
                                    <Image source={{ uri: khop }} style={styles.image} resizeMode='contain' />
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                )
            }
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    containerArea: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: appInfo.widthWindows * 0.05,
        paddingRight: appInfo.widthWindows * 0.05
    },
    content: {
        color: '#FFFFFF',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    imageAnlenMilk: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.3,
    },
    frame: {
        borderRadius: 12,
        borderWidth: 2.4,
        borderColor: '#ECD24A',
        width: appInfo.widthWindows * 0.8,
        height: appInfo.heightWindows * 0.2,
        marginTop: appInfo.heightWindows * 0.02,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});

export default ScreenPage6