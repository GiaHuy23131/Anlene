import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback  } from 'react-native'
import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useAppDispatch } from '../redux/hooks/hooks';
//redux
import { addUser } from '../redux/slices/UserSlices';
//comopents
import { HeaderComponents, ButtonComponents } from '../components';
//
import { appInfo } from '../constains/appInfo';
type DataRouteProp = RouteProp<RootStackParamList, 'ScreenPage3'>;
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20207.png?alt=media&token=396baa13-44ec-4e73-bb7b-c2024af3dea1';
const scale = appInfo.widthWindows / 375;
const adjustedSize = 24 / (appInfo.widthWindows / appInfo.widthWindows);
const normalizeFontSize = (size: any) => Math.round(size * scale);
//type
type Stack = StackNavigationProp<RootStackParamList, "ScreenPage3">
const ScreenPage3 = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<Stack>();
    //route
    const route = useRoute<DataRouteProp>();
    const indexCount: Number = route.params;
    //
    const [name, setName] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');

    const [nameChecked, setNameChecked] = useState(false);
    const [phoneChecked, setPhoneChecked] = useState(false);
    const [emailChecked, setEmailChecked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [visible, setVisible] = useState(false);
    //handle
    const handleContinue = () => {
        navigation.goBack();
    }
    const handleInputName = (text: any) => {
        setName(text);
        setNameChecked(text.trim().length < 0);
    };
    const handleInputPhone = (text: any) => {
        const numericValue = text.replace(/[^0-9]/g, ''); // loại bỏ ký tự không phải số
        setNumberPhone(numericValue);
        setPhoneChecked(text.trim().length < 0);
    };
    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };
    const handleConfirm = () => {
        let valid = true;
        if (name.trim() === '') {
            setNameChecked(true);
            valid = false;
        } else {
            setNameChecked(false);
        }

        if (numberPhone.trim() === '') {
            setPhoneChecked(true);
            valid = false;
        } else {
            setPhoneChecked(false);
        }

        if (valid) {
            dispatch(addUser({
                name: name,
                numberPhone: numberPhone,
                email: email,
            })).unwrap()
                .catch((error) => console.error("Error dispatching addUser:", error));
            setName('');
            setNumberPhone('');
            setEmail('');
            setIsChecked(false);
            navigation.navigate("ScreenPage4", indexCount);
            console.log('All inputs are valid!');

        }
    };
    //log
    // console.log('nameChecked', nameChecked);
    // console.log('phoneChecked', phoneChecked);
    // console.log('name',name);

    // console.log('indexCount', indexCount);
    return (
        <LinearGradient
            colors={indexCount === 0 ? ['#0E470E', '#20680D', '#2E820D', '#13500E'] : indexCount === 1 ? ['#FD9500', '#FEBF00', '#FB8402'] : ['#969696', '#969696']}
            style={styles.container}
        >
            {visible &&
                <View style={styles.overlay}>
                    <View style={styles.containerNoti} >
                        <Text style={styles.title}>THÔNG BÁO!</Text>
                        <Text style={styles.contentNoti}>Bạn có muốn huỷ bỏ kết quả{'\n'} kiểm tra sức khoẻ trước đó không?</Text>
                        <View style={{ flexDirection: 'row', gap: 20, marginTop: '3%' }}>
                            <TouchableOpacity style={styles.buttonCancel} onPress={() => setVisible(false)}>
                                <Text style={styles.textCancel}>HỦY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContinue} onPress={() => handleContinue()}>
                                <Text style={styles.textContinue} >ĐỒNG Ý</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={{ flex: 1, alignItems: 'center', paddingLeft: appInfo.widthWindows * 0.05, paddingRight: appInfo.widthWindows * 0.05 }}>
                    <HeaderComponents page={'Trang 3/6'} onPressBack={() => setVisible(true)} />
                    <Image source={{ uri: anlene }}
                        height={normalizeFontSize(appInfo.heightWindows * 0.03)}
                        width={normalizeFontSize(appInfo.widthWindows * 0.5)}
                        resizeMode="contain"
                        style={{ marginTop: appInfo.heightWindows * 0.02, marginBottom: appInfo.heightWindows * 0.02 }} />
                    <Text style={[styles.content, { fontSize: normalizeFontSize(13), fontWeight: 'bold', color: indexCount === 0 ? '#BA872C' : indexCount === 1 ? '#376E48' : '#DF1E13' }]}>
                        HOÀN THÀNH BÀI KIỂM TRA</Text>
                    <Text style={[styles.content, { fontSize: normalizeFontSize(26), fontWeight: 'bold', color: indexCount === 0 ? '#BA872C' : indexCount === 1 ? '#376E48' : '#DF1E13' }]}>
                        {indexCount === 0 ? "XIN CHÚC MỪNG!" : "LƯU Ý MỘT CHÚT!"}</Text>
                    <Text style={[styles.content, { fontSize: normalizeFontSize(12), marginTop: appInfo.heightWindows * 0.01 }]}
                    >
                        {indexCount === 0 ? "Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt." :
                            indexCount === 1 ? "Có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến sức đề kháng hơn nhé..." :
                                "Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé, bởi sau tuổi 40,..."}
                    </Text>
                    <Text style={[styles.content, { fontSize: normalizeFontSize(15), marginTop: appInfo.heightWindows * 0.01 }]}
                    >
                        Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu đãi lên đến 100.000đ từ Anlene.
                    </Text>
                    <View style={{ alignSelf: 'flex-start' }}>
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Họ Tên:
                                {nameChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>*</Text>}
                            </Text>
                            <View style={[styles.textInput, { borderWidth: 1.5, borderColor: nameChecked ? indexCount === 1 ? '#376E48' : '#ECD24A' : '#FFFFFF' }]}>
                                <TextInput
                                    value={name}
                                    placeholder="Nhập họ và tên"
                                    onChangeText={handleInputName}
                                    style={styles.input}
                                />
                            </View>
                            {nameChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>Vui lòng nhập họ tên</Text>}
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Số Điện Thoại:
                                {phoneChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>*</Text>}
                            </Text>
                            <View style={[styles.textInput, { borderWidth: 1.5, borderColor: phoneChecked ? indexCount === 1 ? '#376E48' : '#ECD24A' : '#FFFFFF' }]}>
                                <TextInput
                                    value={numberPhone}
                                    maxLength={10}
                                    keyboardType='numeric'
                                    placeholder="Nhập số điện thoại"
                                    onChangeText={handleInputPhone}
                                    style={styles.input}
                                />
                            </View>
                            {phoneChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>Vui lòng nhập số điện thoại</Text>}
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.label}>Email:
                                {emailChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>*</Text>}
                            </Text>
                            <View style={styles.textInput}>
                                <TextInput
                                    value={email}
                                    placeholder="Nhập email"
                                    onChangeText={(text) => setEmail(text)}
                                    style={styles.input}
                                />
                            </View>
                            {emailChecked && <Text style={[styles.textWarning, { color: indexCount === 1 ? '#376E48' : '#ECD24A' }]}>Vui lòng nhập email</Text>}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.checkbox}
                                onPress={handleCheckboxPress}
                            >
                                {isChecked && <MaterialIcons name="check" size={normalizeFontSize(18)} color="#0E470E" />}
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', flexWrap: 'wrap', marginRight: 10, fontSize: normalizeFontSize(11) }}>
                                Tôi đồng ý để Anlene Vietnam liên hệ trong bất kỳ chương trình quảng cáo sản phẩm hay khuyến mãi nào</Text>
                        </View>
                        <Text style={{ color: '#FFFFFF', flexWrap: 'wrap', fontSize: normalizeFontSize(11), marginTop: appInfo.heightWindows * 0.01 }}>
                            Bằng cách điền bảng thông tin này, tôi đồng ý với việc thông tin của mình để xử lý dựa trên chính sách bảo mật của Anlene</Text>
                    </View>
                    <ButtonComponents text='HOÀN THÀNH'
                        customStyles={[styles.buttonConfirm, { backgroundColor: name.trim().length > 0 && numberPhone.trim().length > 0 && !nameChecked && !phoneChecked ? '#B70002' : '#B8B8B8' }]}
                        onPress={() => handleConfirm()}
                    />
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </LinearGradient>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: '#478449',
        fontSize: normalizeFontSize(24),
        fontWeight: 'bold',
    },

    content: {
        color: '#FFFFFF',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    textInput: {
        width: appInfo.widthWindows * 0.9,
        height: appInfo.heightWindows * 0.055,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: '#000', // Màu bóng của ô nhập liệu
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2, // Thêm bóng trên Android
        marginBottom: 5,
        marginTop: 5,

    },
    input: {
        flex: 1,
        fontSize: normalizeFontSize(14),
    },
    label: {
        fontSize: normalizeFontSize(14),
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textWarning: {
        fontSize: normalizeFontSize(12),
    },
    containerInput: {
        alignSelf: 'flex-start',
        marginBottom: appInfo.heightWindows * 0.02,
    },
    checkbox: {
        width: adjustedSize,
        height: adjustedSize,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonConfirm: {
        marginTop: 'auto',
        marginBottom: appInfo.heightWindows * 0.02,
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

export default ScreenPage3;