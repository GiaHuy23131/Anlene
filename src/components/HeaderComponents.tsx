import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigation';
type HeaderProps = {
    page: string;
    isCheck?: boolean;
    onPressBack?(): void;
}
type Stack = StackNavigationProp<RootStackParamList>
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FAnlene.png?alt=media&token=aaa2aa9a-45e6-45b8-9741-0ea9bf7dfb02';
const HeaderComponents = ({ page, isCheck, onPressBack }: HeaderProps) => {
    const navigation = useNavigation<Stack>();
    const handlePress = () => {
        if (onPressBack) {
            onPressBack(); // Gọi hàm onPress1 nếu có
        }
        else {
            navigation.goBack()
        }
    };
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative'
        }}>
            {!isCheck ?
                <TouchableOpacity onPress={() => handlePress()} style={{ position: 'absolute' }}>
                    <Entypo
                        name="chevron-left"
                        size={28}
                        color="#FFFFFF"
                    />
                </TouchableOpacity> : null}
            {/* Text page ở giữa */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name='chevron-left' size={20} color={'#FFFFFF'} />
                    <Text style={{ fontSize: 16, color: '#FFFFFF' }}> {page} </Text>
                    <Entypo name='chevron-right' size={20} color={'#FFFFFF'} />
                </View>


            </View>
            {!isCheck ?
                <TouchableOpacity onPress={() => navigation.navigate("ScreenPage1")} style={{ position: 'absolute', right: 0 }}>
                    <Entypo
                        name="home"
                        size={28}
                        color="#FFFFFF"
                    />
                </TouchableOpacity>

                : <Image height={20} width={70} source={{ uri: anlene }} style={{ position: 'absolute', right: 20 }} />
            }
        </View>
    );
};

export default HeaderComponents;