import { View } from 'react-native'
import React from 'react';
import Svg, { Text, Defs, LinearGradient, Stop, TSpan } from 'react-native-svg';
//containts
import { appInfo } from '../constains/appInfo';
type TitleProps = {
    children: any,
}
const TitleComponennts = ({ children }: TitleProps) => {
    return (
        // <Svg
        //     height={'100%'} // Thay '100%' bằng 'auto' để chiều cao thay đổi theo nội dung
        //     width={appInfo.widthWindows * 1}
        //     viewBox="0 0 300 100"
        //     preserveAspectRatio="xMidYMid meet"
        // >
        //     <Defs>
        //         <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        //             <Stop offset="0" stopColor="#BA872C" />
        //             <Stop offset="0.5" stopColor="#E8E276" />
        //             <Stop offset="1" stopColor="#BA872C" />
        //         </LinearGradient>
        //     </Defs>
        //     <Text
        //         fill="url(#grad)"
        //         fontSize="22"
        //         fontWeight="bold"
        //         x="50%" // Căn giữa theo chiều ngang
        //         textAnchor="middle" // Căn giữa văn bản
        //         alignmentBaseline="middle" // Đảm bảo chữ nằm ở giữa
        //     >
        //         {children}
        //     </Text>
        // </Svg>
        <View></View>
    )
}

export default TitleComponennts;