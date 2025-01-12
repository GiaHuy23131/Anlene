import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
//screen
import { ScreenPage1, ScreenPage2, ScreenPage3, ScreenPage4, ScreenPage5, ScreenPage6} from '../view';

export type RootStackParamList = {
  ScreenPage1: undefined;
  ScreenPage2: undefined;
  ScreenPage3: Number;
  ScreenPage4: Number;
  ScreenPage5: undefined;
  ScreenPage6: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ScreenPage1' component={ScreenPage1} />
        <Stack.Screen name='ScreenPage2' component={ScreenPage2} />
        <Stack.Screen name='ScreenPage3' component={ScreenPage3} />
        <Stack.Screen name='ScreenPage4' component={ScreenPage4} />
        <Stack.Screen name='ScreenPage5' component={ScreenPage5} />
        <Stack.Screen name='ScreenPage6' component={ScreenPage6} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default StackNavigator;