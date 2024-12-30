import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
type HeaderProps = {
    page: string;
    isCheck?: boolean;
    onPress?: () => void;
}
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FAnlene.png?alt=media&token=aaa2aa9a-45e6-45b8-9741-0ea9bf7dfb02';
const HeaderComponents = ({ page, onPress, isCheck }: HeaderProps) => {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 20,
            position: 'relative'
        }}>
            {!isCheck ? <Entypo
                name="chevron-left"
                size={28}
                color="#FFFFFF"
                style={{ position: 'absolute', left: 20 }}
            /> : null}
            {/* Text page ở giữa */}
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name='chevron-left' size={20} color={'#FFFFFF'} />
                    <Text style={{ fontSize: 16, color: '#FFFFFF' }}> {page} </Text>
                    <Entypo name='chevron-right' size={20} color={'#FFFFFF'} />
                </View>


            </View>
            {!isCheck ?
                <Entypo
                    name="home"
                    size={28}
                    color="#FFFFFF"
                    style={{ position: 'absolute', right: 20 }}
                />
                : <Image height={20} width={70} source={{uri: anlene}} style={{position: 'absolute', right: 20}} />
            }
        </View>
    );
};

export default HeaderComponents;