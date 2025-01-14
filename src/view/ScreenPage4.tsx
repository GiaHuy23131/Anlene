import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/StackNavigation';

import { StackNavigationProp } from '@react-navigation/stack';
//constais
import { appInfo } from '../constains/appInfo';
//comopents
import { HeaderComponents, ButtonComponents } from '../components';
import { appColor } from '../constains/appColor';
type DataRouteProp = RouteProp<RootStackParamList, 'ScreenPage4'>;
const scale = appInfo.widthWindows / 375;
const adjustedSize = 24 / (appInfo.widthWindows / appInfo.widthWindows);
const normalizeFontSize = (size: any) => Math.round(size * scale);
const anlene = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20207.png?alt=media&token=396baa13-44ec-4e73-bb7b-c2024af3dea1';
const co = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Group%20258.png?alt=media&token=f2dfbea8-b4d5-4920-a237-6b34075570c6';
const xuong = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Group%20257.png?alt=media&token=f908d0ad-513e-4923-a74c-9ec1efd16ff9';
const khop = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Group%204%201.png?alt=media&token=8b600a6d-744c-4d71-88b7-db2f50988436';
const canxi = 'https://firebasestorage.googleapis.com/v0/b/terrianfirefly.appspot.com/o/Anlene%2FGroup%20272.png?alt=media&token=97182d81-7e3c-447d-b2bb-7e8a5bdc976c';
//type
type Stack = StackNavigationProp<RootStackParamList, "ScreenPage1">
const ScreenPage4 = () => {
  //stack
  const navigation = useNavigation<Stack>();
  //route
  const route = useRoute<DataRouteProp>();
  const indexCount: Number = route.params;
  //
  const [seeMore, setSeeMore] = useState(false);
  const [loadingImages, setLoadingImages] = useState(true);
  //
  const checkTitle = indexCount === 0 ? '#BA872C' : indexCount === 1 ? appColor.green : '#DF1E13';
  console.log('indexCount', indexCount);
  useEffect(() => {
    // Tải hình ảnh và theo dõi trạng thái
    const prefetchImages = async () => {
      try {
        // Tạo một mảng các promise để tải hình ảnh
        const images = [anlene, co, xuong, khop, canxi];
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
       colors={indexCount === 0 ? appColor.backgroundGreen : indexCount === 1 ? appColor.backgroundYellow : appColor.backgroundGrey}
      style={styles.container}
    >
      {
        loadingImages ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
        ) : (
          <SafeAreaView style={styles.containerArea}>

            <HeaderComponents page={'Trang 4/6'} />
            <ScrollView
              showsVerticalScrollIndicator={false}
              scrollEnabled={seeMore}
            >
              <View style={styles.container}>
                <Image source={{ uri: anlene }}
                  height={normalizeFontSize(appInfo.heightWindows * 0.03)}
                  width={normalizeFontSize(appInfo.widthWindows * 0.5)}
                  resizeMode="contain"
                  style={{ marginTop: appInfo.heightWindows * 0.01, marginBottom: appInfo.heightWindows * 0.01 }} />
                <Text style={[styles.content, { fontSize: normalizeFontSize(24), fontWeight: 'bold', color: checkTitle }]}>
                  {indexCount === 0 ? "XIN CHÚC MỪNG!" : "LƯU Ý MỘT CHÚT!"}</Text>
                <Text style={[styles.content, { fontSize: normalizeFontSize(13), marginTop: appInfo.heightWindows * 0.01 }]}
                >
                  {indexCount === 0 ? "Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm." :
                    indexCount === 1 ? "Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm: " :
                      "Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé, bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp suy giảm:"}
                </Text>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center', justifyContent: 'center', marginTop: appInfo.heightWindows * 0.01 }}>
                  <View style={styles.containerCoXuongKhop}>
                    <Image source={{ uri: co }} style={styles.imageCoXuongKhop} />
                    <LinearGradient colors={[appColor.green, '#187B33']} style={styles.textContainer}>
                      <Text style={styles.titleText}>KHỐI CƠ</Text>
                      <Text style={styles.subtitleText}>MẤT ĐI</Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.containerCoXuongKhop}>
                    <Image source={{ uri: xuong }} style={styles.imageCoXuongKhop} />
                    <LinearGradient colors={[appColor.green, '#187B33']} style={styles.textContainer}>
                      <Text style={styles.titleText}>MẬT ĐỘ XƯƠNG</Text>
                      <Text style={styles.subtitleText}>SUY GIẢM</Text>
                    </LinearGradient>
                  </View>
                  <View style={styles.containerCoXuongKhop}>
                    <Image source={{ uri: khop }} style={styles.imageCoXuongKhop} />
                    <LinearGradient colors={[appColor.green, '#187B33']} style={styles.textContainer}>
                      <Text style={styles.titleText}>KHỚP</Text>
                      <Text style={styles.subtitleText}>THOÁI HOÁ</Text>
                    </LinearGradient>
                  </View>
                </View>
                <Text style={[styles.content, { fontSize: normalizeFontSize(12), marginTop: appInfo.heightWindows * 0.01 }]}>
                  {indexCount === 0 ? "Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày."
                    : indexCount === 1 ? "Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn."
                      : "Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày."}</Text>
                <Image source={{ uri: canxi }} width={appInfo.widthWindows} height={appInfo.widthWindows * 0.6} resizeMode='contain' />
                <Text style={[styles.content, { fontSize: normalizeFontSize(6.11), marginBottom: appInfo.heightWindows * 0.005 }]}>*Mỗi 10 năm. Nguồn: Daly et al., 2013. BMC Geriatrics 13:71</Text>
                <Text style={[styles.content, { fontSize: normalizeFontSize(6.11), marginBottom: appInfo.heightWindows * 0.005, width: appInfo.widthWindows * 0.5 }]}>
                  **Mỗi 5-7 năm sau khi mãn kinh. Nguồn: National Osteoporosis Foundation (2009). Hormones and Healthy Bones</Text>
                <Text style={[styles.content, { fontWeight: 'bold', fontSize: normalizeFontSize(13), color: checkTitle }]}>
                  LỰA CHỌN GIÚP CƠ-XƯƠNG-KHỚP CHẮC KHOẺ</Text>
                <Text style={[styles.content, { fontSize: normalizeFontSize(12), width: appInfo.widthWindows * 0.8 }]}>
                  {indexCount === 0 ? "Cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!"
                    : indexCount === 1 ? "Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!"
                      : "Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!"}
                </Text>
                <TouchableOpacity style={styles.btnSeeMore} onPress={() => setSeeMore(true)} >
                  {seeMore ? (<Text style={[styles.content, { fontSize: normalizeFontSize(11) }]}>
                    *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi, Collagen cùng các Vitamin, Khoáng chất giúp
                    Cơ-Xương-Khớp chắc khỏe và tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
                  </Text>
                  ) : (
                    <Text style={[styles.textSeeMore, { color: indexCount !== 1 ? '#ECD24A' : appColor.green }]}>
                      Xem thêm</Text>
                  )}

                </TouchableOpacity>
                <ButtonComponents text='MUA NGAY' customStyles={styles.buttonConfirm} onPress={() => navigation.navigate("ScreenPage5")} />
              </View>
            </ScrollView>
          </SafeAreaView>
        )
      }
    </LinearGradient >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerArea: {
    flex: 1,
    alignSelf: 'center',
    paddingLeft: appInfo.widthWindows * 0.05,
    paddingRight: appInfo.widthWindows * 0.05
  },
  content: {
    color: appColor.white,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  containerCoXuongKhop: {
    alignItems: 'center',
    flex: 1,
  },
  imageCoXuongKhop: {
    width: appInfo.widthWindows * 0.23,
    height: appInfo.widthWindows * 0.23,
    resizeMode: 'contain',
    borderRadius: 90,
    marginBottom: 10,
  },
  textContainer: { // View bao quanh các Text
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: appColor.white,
    padding: 5,
    width: '100%',
  },
  titleText: { // Text "KHỐI CƠ"
    fontSize: normalizeFontSize(11),
    fontWeight: 'bold',
    color: appColor.white,
  },
  subtitleText: { // Text "MẤT ĐI"
    fontSize: normalizeFontSize(12),
    color: '#ECD24A',
  },
  buttonConfirm: {
    marginTop: 'auto',
    marginBottom: appInfo.heightWindows * 0.02,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#FFC200',
    backgroundColor: appColor.red,
  },
  btnSeeMore: {
    marginBottom: appInfo.heightWindows * 0.01,
  },
  textSeeMore: {
    fontSize: normalizeFontSize(12),
    textDecorationLine: 'underline',
  }
});
export default ScreenPage4;