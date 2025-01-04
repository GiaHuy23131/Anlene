import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from "react";
import Svg, { Line } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
//components
import { HeaderComponents, ButtonComponents } from '../components';
import { appInfo } from '../constains/appInfo';
const arrImage = [
    'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%201_1080p.png?alt=media&token=264d7c64-c6a1-4f6b-bdbc-05ba4b82be10',
    'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%201.png?alt=media&token=6d42baa9-d8fb-409a-b2df-f87195ab8eb8',
    'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FB%C3%A0i%20t%E1%BA%ADp%20Ki%E1%BB%83m%20Tra%20C%C6%A1%20X%C6%B0%C6%A1ng%20Kh%E1%BB%9Bp%20v%E1%BB%9Bi%20Anlene%20%20B%C3%A0i%203.png?alt=media&token=e071db84-ed12-4d2f-9469-b445d2bc96f4',
    'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FFrame%20194.png?alt=media&token=5c8d2894-d023-4bc8-a248-c9a19d6aeafa',
]
const happyIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FHappyIcon.png?alt=media&token=d28c2311-e0f5-4844-98ac-04b689d7d163';
const sadIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FSadIcon.png?alt=media&token=538a2b28-26ff-4f1a-8392-3b37f0c3bc6b';
const checkIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup.png?alt=media&token=26e2ad04-573a-466b-a4a6-82473f45bc53';
const xIcon = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%2075.png?alt=media&token=6524cc2b-cc8d-42aa-a1ce-6577936c2b21';
const ScreenPage2 = () => {
    const items = ['Cơ', 'Xương', 'Khớp', 'Đề Kháng'];
    const [indexItem, setIndexItem] = useState(0);
    const [selections, setSelections] = useState<{ index: number; choice: string }[]>([]);
    const [flag, setFlag] = useState(0);

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
                    setIndexItem(indexItem + 1);
                    setFlag(0);
                }

            }, 500)

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
                    setIndexItem(indexItem + 1);
                    setFlag(0);
                }

            }, 500)
        }
    }
    const indexToUse = Math.min(indexItem, 3);
    //log
    console.log('flag', flag);
    console.log('replacedIndexes', selections);
    console.log('indexItem', indexItem);

    return (

        <LinearGradient
            colors={['#0E470E', '#20680D', '#2E820D', '#13500E']}
            style={styles.container}
        >
            <SafeAreaView style={{ flex: 1, alignItems: 'center', marginLeft: appInfo.widthWindows * 0.05, marginRight: appInfo.widthWindows * 0.05 }}>
                <HeaderComponents page={'Trang 2/6'} />
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
                                            strokeDasharray={ selections.some(item => item.index === index)  ? ' ' : `${(appInfo.widthWindows * 0.12) / 12},${(appInfo.widthWindows * 0.12) / 12}`}
                                        />
                                    </Svg>
                                )}
                            </View>
                            {/* Chữ */}
                            <Text style={{ color: '#FFFFFF', marginTop: 5 }}>{item}</Text>
                        </View>
                    ))}
                </View>
                <Text style={[styles.content, { fontSize: 26, color: '#BA872C', fontWeight: 'bold', margin: appInfo.heightWindows * 0.01 }]}>KIỂM TRA CƠ</Text>
                <View>
                    {
                        flag === 1 ? (
                            <Image source={{ uri: checkIcon }} style={styles.checkIcon} />
                        ) : flag === 2 ? (
                            <Image source={{ uri: xIcon }} style={styles.checkIcon} />
                        ) : null
                    }
                    <Image source={{ uri: arrImage[indexToUse] }} style={flag === 1 ? styles.image1 : flag === 2 ? styles.image2 : styles.image} />

                </View>

                <Text style={[styles.content, { fontSize: 18, margin: '3%' }]}>Thẳng lưng trước ghế, đứng lên ngồi xuống 5 lần từ 6-10 giây</Text>
                <View style={{ flexDirection: 'row', gap: 30 }}>
                    <TouchableOpacity style={[styles.button, { borderWidth: 2, borderColor: flag === 1 ? '#FFC200' : 'transparent' }]} onPress={() => handleOk()}>
                        <Image width={appInfo.widthWindows * 0.11} height={appInfo.heightWindows * 0.05} source={{ uri: happyIcon }} style={{ marginBottom: '10%' }} />
                        <Text style={{ color: '#FFFFFF' }}>Được</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={[styles.button, { borderWidth: 2, borderColor: flag === 2 ? '#FFC200' : 'transparent' }]} onPress={() => handleNotOk()}>
                        <Image width={appInfo.widthWindows * 0.11} height={appInfo.heightWindows * 0.05} source={{ uri: sadIcon }} style={{ marginBottom: '10%' }} />
                        <Text style={{ color: '#FFFFFF' }}>Không Được</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComponents text='XÁC NHẬN' customStyles={[styles.buttonConfirm, { backgroundColor: indexItem === 4 ? '#B70002' : '#B8B8B8' }]}
                    disabled={indexItem === 4 ? false : true} />
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
        borderRadius: 20,
        borderColor: '#C6463A',
        borderWidth: 4,
    },
    image: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.38,
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
    },
    buttonConfirm: {
        marginTop: appInfo.heightWindows * 0.02,
    },
});
export default ScreenPage2;