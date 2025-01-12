import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect, useCallback } from "react";
import Svg, { Line } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
//components
import { HeaderComponents, ButtonComponents } from '../components';
import { appInfo } from '../constains/appInfo';
const image1 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%201_1080p.png?alt=media&token=264d7c64-c6a1-4f6b-bdbc-05ba4b82be10';
const image2 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%201.png?alt=media&token=6d42baa9-d8fb-409a-b2df-f87195ab8eb8';
const image3 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%203.png?alt=media&token=e071db84-ed12-4d2f-9469-b445d2bc96f4';
const image4 = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20228.png?alt=media&token=c0b7e53f-681a-44c4-b235-9d23a7920912';
const happyIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FHappyIcon.png?alt=media&token=d28c2311-e0f5-4844-98ac-04b689d7d163';
const sadIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FSadIcon.png?alt=media&token=538a2b28-26ff-4f1a-8392-3b37f0c3bc6b';
//type
type Stack = StackNavigationProp<RootStackParamList, "ScreenPage2">
//
const scale = appInfo.widthWindows / 375;

const normalizeFontSize = (size: any) => Math.round(size * scale);
const ScreenPage2 = () => {
    const navigation = useNavigation<Stack>();
    const items = [{ name: 'Cơ', uri: image1, content: "Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây" },
    { name: 'Xương', uri: image2, content: "Duỗi 2 tay về phía trước, từ từ cúi xuống để chạm vào mũi bàn chân" },
    { name: 'Khớp', uri: image3, content: "Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau" },
    { name: 'Đề Kháng', uri: image4, content: "6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?" }];
    const [indexItem, setIndexItem] = useState(0);
    const [selections, setSelections] = useState<{ index: number; choice: string }[]>([]);
    const [flag, setFlag] = useState(0);
    const [visible, setVisible] = useState(false);
    const [loadingImages, setLoadingImages] = useState(true);

    // w3246
    const handleOk = () => {
        if (indexItem < items.length) {
            setFlag(1);
            setTimeout(() => {
                if (indexItem < 4) {
                    setSelections((prev) => [
                        ...prev,
                        { index: indexItem, choice: 'y' }, // Lưu vị trí và lựa chọn 'y'
                    ]);
                    setFlag(0);
                    setIndexItem((prevIndex) => prevIndex + 1); // Tăng indexItem
                }

            }, 500);

        }
    }
    const handleNotOk = () => {
        if (indexItem < items.length) {
            setFlag(2);
            setTimeout(() => {
                if (indexItem < 4) {
                    setSelections((prev) => [
                        ...prev,
                        { index: indexItem, choice: 'n' }, // Lưu vị trí và lựa chọn 'y'
                    ]);
                    setFlag(0);
                    setIndexItem(indexItem + 1);
                }

            }, 500);
        }
    }
    //Back
    const goBack = () => {
        if (indexItem > 0) {
            setIndexItem(prevIndex => Math.max(0, prevIndex - 1)); // Đảm bảo không giảm dưới 0
            setSelections(prev => prev.filter(i => i.index !== indexItem - 1));
        } else {
            navigation.goBack();
        }
    }
    const handleContinue = () => {
        setVisible(false);
        const indexCount = selections.filter(item => item.choice === 'n').length
        // console.log('indexCount',indexCount);

        navigation.navigate("ScreenPage3", indexCount);
    }
    const indexToUse = Math.min(indexItem, 3);
    useFocusEffect(
        useCallback(() => {
            setIndexItem(0);
            setSelections([]);
        }, [])
    );
    useEffect(() => {
        // Tải hình ảnh và theo dõi trạng thái
        const prefetchImages = async () => {
            try {
                // Tạo một mảng các promise để tải hình ảnh
                const images = [image1, image2, image3, image4, happyIcon, sadIcon];
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
    //log
    // console.log('flag', flag);
    // console.log('replacedIndexes', selections);
    // console.log('indexItem', indexItem);
    // console.log('visible', visible);

    return (

        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.container}
        >
            {visible &&
                <View style={styles.overlay}>
                    <View style={styles.containerNoti} >
                        <Text style={styles.title}>CẢM ƠN</Text>
                        <Text style={styles.contentNoti}>Bạn đã tham gia bài kiểm tra sức khoẻ{'\n'} Hãy tiếp tục để có thể nhận kết quả kiểm tra sức khoẻ của bạn.</Text>
                        <View style={{ flexDirection: 'row', gap: 20, marginTop: '3%' }}>
                            <TouchableOpacity style={styles.buttonCancel} onPress={() => setVisible(false)}>
                                <Text style={styles.textCancel}>HỦY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContinue} onPress={() => handleContinue()}>
                                <Text style={styles.textContinue} >TIẾP TỤC</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }

            <SafeAreaView style={{ flex: 1, alignItems: 'center', paddingLeft: appInfo.widthWindows * 0.05, paddingRight: appInfo.widthWindows * 0.05 }}>
                <HeaderComponents page={'Trang 2/6'} onPressBack={() => goBack()} />

                <Text style={[styles.content, { fontSize: 22, fontWeight: 'bold', marginTop: appInfo.heightWindows * 0.01 }]}>KIỂM TRA CƠ - XƯƠNG - KHỚP</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around', // Giãn cách đều giữa các phần tử
                        backgroundColor: 'rgba(202, 195, 195, 0.2)',
                        padding: 20,
                        borderRadius: 15,
                        marginTop: appInfo.heightWindows * 0.01,
                    }}
                >
                    {items.map((item, index) => (
                        <View key={index} style={{ alignItems: 'flex-start' }}>
                            {/* Hình tròn và đường gạch ngang */}
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                {
                                    selections[index]?.choice === 'y' ? (
                                        <LinearGradient colors={['#73A442', '#478449']} style={styles.circle}>
                                            <Feather name="check" size={appInfo.widthWindows * 0.05} color="#FFFFFF" />
                                        </LinearGradient>

                                    ) : selections[index]?.choice === 'n' ? (
                                        <View style={[styles.circle, { backgroundColor: '#C6463A' }]}>
                                            <Feather name="x" size={appInfo.widthWindows * 0.05} color="#FFFFFF" />
                                        </View>

                                    ) : (
                                        <View style={indexItem === index ? styles.circleCheck : styles.circle}>
                                            {indexItem === index ? (
                                                item !== null ? (
                                                    <View style={styles.circleInner} />
                                                ) : null
                                            ) : (
                                                <Text style={{ color: '#FFFFFF' }}>{index + 1}</Text>
                                            )}
                                        </View>
                                    )
                                }
                                {index < 3 && (
                                    <Svg
                                        height="2"
                                        width={appInfo.widthWindows * 0.145}
                                    >
                                        <Line
                                            x1="0"
                                            y1="1"
                                            x2={appInfo.widthWindows * 0.145}
                                            y2="1"
                                            stroke="#FFFFFF"
                                            strokeWidth="2"
                                            strokeDasharray={selections.some(item => item.index === index) ? ' ' : `${(appInfo.widthWindows * 0.12) / 12},${(appInfo.widthWindows * 0.12) / 12}`}
                                        />
                                    </Svg>
                                )}
                            </View>
                            {/* Chữ */}
                            <Text style={{ color: '#FFFFFF', marginTop: 5 }}>{item.name}</Text>
                        </View>
                    ))}
                </View>

                <Text style={[styles.content, { fontSize: 26, color: '#ECD24A', fontWeight: 'bold', margin: appInfo.heightWindows * 0.01 }]}>KIỂM TRA CƠ</Text>
                {
                    loadingImages ? (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size="large" color="#FFFFFF" />
                        </View>
                    ) : (
                        <View>
                            {
                                flag === 1 ? (
                                    <View style={[styles.checkIcon, { backgroundColor: '#73A442' }]}>
                                        <Feather name="check" size={appInfo.widthWindows * 0.08} color="#FFFFFF" />
                                    </View>
                                ) : flag === 2 ? (
                                    <View style={[styles.checkIcon, { backgroundColor: '#C6463A' }]}>
                                        <Feather name="x" size={appInfo.widthWindows * 0.08} color="#FFFFFF" />
                                    </View>
                                ) : null
                            }
                            <Image source={{ uri: items[indexToUse].uri }} style={flag === 1 ? styles.image1 : flag === 2 ? styles.image2 : styles.image} />

                        </View>
                    )}
                <Text style={[styles.content, { fontSize: 18, margin: '3%' }]}>{items[indexToUse].content}</Text>
                <View style={{ flexDirection: 'row', gap: 30 }}>
                    <TouchableOpacity style={[styles.button, { borderWidth: 2, borderColor: flag === 1 ? '#FFC200' : 'transparent' }]} onPress={() => handleOk()}>
                        <Image width={appInfo.widthWindows * 0.11} height={appInfo.heightWindows * 0.05} source={{ uri: happyIcon }} style={{ marginBottom: '10%' }} />
                        <Text style={{ color: '#FFFFFF' }}>Được</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { borderWidth: 2, borderColor: flag === 2 ? '#FFC200' : 'transparent' }]} onPress={() => handleNotOk()}>
                        <Image width={appInfo.widthWindows * 0.11} height={appInfo.heightWindows * 0.05} source={{ uri: sadIcon }} style={{ marginBottom: '10%' }} />
                        <Text style={{ color: '#FFFFFF' }}>Không Được</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComponents
                    text='XÁC NHẬN'
                    customStyles={[styles.buttonConfirm, { backgroundColor: indexItem === 4 ? '#B70002' : '#B8B8B8' }]}
                    disabled={indexItem === 4 ? false : true}
                    onPress={() => setVisible(true)}
                />
                <Text style={[styles.content, { fontSize: 12, marginTop: appInfo.heightWindows * 0.015 }]}>
                    *Lưu ý: Hãy dừng bài tập ngay nếu cảm thấy không thoải mái. Đảm bảo vị trí tập an toàn để không té ngã.</Text>
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
    circle: {
        borderRadius: 90, // Đảm bảo rằng giá trị này đủ lớn để làm tròn View
        borderWidth: 1.5,
        borderColor: '#FFFFFF',
        width: appInfo.widthWindows * 0.080,  // Chiều rộng của View, đủ lớn để thấy dạng tròn
        height: appInfo.widthWindows * 0.080, // Chiều cao của View, bằng chiều rộng để tạo hình tròn hoàn hảo
        alignItems: 'center', // Căn chỉnh nội dung ngang
        justifyContent: 'center', // Căn chỉnh nội dung dọc
    },
    circleInner: {
        width: appInfo.widthWindows * 0.045,  // Chiều rộng của View, đủ lớn để thấy dạng tròn
        height: appInfo.widthWindows * 0.045, // Chiều cao của View, bằng chiều rộng để tạo hình tròn hoàn hảo
        borderRadius: 90,
        backgroundColor: "#ECD24A",
    },
    circleCheck: {
        borderRadius: 90, // Đảm bảo rằng giá trị này đủ lớn để làm tròn View
        borderWidth: 2,
        borderColor: '#ECD24A',
        width: appInfo.widthWindows * 0.080,  // Chiều rộng của View, đủ lớn để thấy dạng tròn
        height: appInfo.widthWindows * 0.080, // Chiều cao của View, bằng chiều rộng để tạo hình tròn hoàn hảo
        alignItems: 'center', // Căn chỉnh nội dung ngang
        justifyContent: 'center', // Căn chỉnh nội dung dọc
        backgroundColor: '#FFFFFF',
    },
    circleX: {
        borderRadius: 90, // Đảm bảo rằng giá trị này đủ lớn để làm tròn View
        borderWidth: 2,
        borderColor: '#C6463A',
        width: appInfo.widthWindows * 0.080,  // Chiều rộng của View, đủ lớn để thấy dạng tròn
        height: appInfo.widthWindows * 0.080, // Chiều cao của View, bằng chiều rộng để tạo hình tròn hoàn hảo
        alignItems: 'center', // Căn chỉnh nội dung ngang
        justifyContent: 'center', // Căn chỉnh nội dung dọc
        backgroundColor: '#FFFFFF',
    },
    image1: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.38,
        borderRadius: 20,
        borderColor: '#73A442',
        borderWidth: 4,
    },
    image2: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.38,
        borderRadius: 16,
        borderColor: '#C6463A',
        borderWidth: 4,
    },
    image: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.38,
        borderRadius: 16,
    },
    button: {
        backgroundColor: '#71A162',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: appInfo.widthWindows * 0.23,
        height: appInfo.widthWindows * 0.23,
    },
    checkIcon: {
        position: 'absolute',
        width: appInfo.widthWindows * 0.12,
        height: appInfo.widthWindows * 0.12,
        zIndex: 1,
        right: -15,
        top: -15,
        borderRadius: 90, // Đảm bảo rằng giá trị này đủ lớn để làm tròn View
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonConfirm: {
        marginTop: appInfo.heightWindows * 0.02,
    },
    containerNoti: {
        position: 'absolute',
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
        padding: 20,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        top: '40%',
        left: '5%',
        right: '5%',

    },
    title: {
        color: '#478449',
        fontSize: normalizeFontSize(24),
        fontWeight: 'bold',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Lớp phủ mờ
        justifyContent: 'center', // Căn giữa dọc
        alignItems: 'center', // Căn giữa ngang
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 100, // Đảm bảo lớp phủ nằm trên cùng
    },
    contentNoti: {
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: normalizeFontSize(14),
        marginLeft: '8%',
        marginRight: '8%',
    },
    buttonCancel: {
        borderRadius: 90,
        borderWidth: 2,
        borderColor: '#B70002',
        width: appInfo.widthWindows * 0.35,
        padding: 10,
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
    },
    buttonContinue: {
        borderRadius: 90,
        backgroundColor: '#B70002',
        width: appInfo.widthWindows * 0.35,
        padding: 10,
        justifyContent: 'center', // Căn giữa theo chiều dọc
        alignItems: 'center', // Căn giữa theo chiều ngang
    },
    textContinue: {
        color: '#FFFFFF',
    },
    textCancel: {
        color: '#B70002',
    },
});
export default ScreenPage2;