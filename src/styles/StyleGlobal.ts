import { StyleSheet } from "react-native";
import { appInfo } from "../constains/appInfo";
import { appColor } from "../constains/appColor";
export const StyleGlobal = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#20680D',
    },
    containerArea: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: appInfo.widthWindows * 0.05,
        paddingRight: appInfo.widthWindows * 0.05
    },
    content: {
        color: appColor.white,
        textAlign: 'center',
        flexWrap: 'wrap',
    }
});