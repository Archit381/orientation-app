import { useNavigation } from '@react-navigation/native'

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
  ScrollView,
  Linking,
  Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftCircleIcon,
  MinusIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import { themeColors } from '../theme';
import { clubItems } from '../constants';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function DetailScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const [isImageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const navigation = useNavigation();

  const openImageModal = (imageSource) => {
    setSelectedImage(imageSource);
    setImageModalVisible(true);
  };

  const closeImageModal = () => {
    setSelectedImage('');
    setImageModalVisible(false);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={item.bgimage}
        style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className="w-full absolute "
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 16 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>
        
        <View
          style={{
            shadowColor: themeColors.bggray,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image source={item.image} style={{ height: 300, width: 300, alignSelf: 'center', marginTop: ios ? 0 : 40 }} />
        </View>
        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
            <Text style={{ color: themeColors.text, fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
          
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
              <View style={{ backgroundColor: item.accent, padding: 10, paddingHorizontal: 16, borderRadius: 30 }}>
                <Text style={{ color: 'white' }}>{item.stacks1}</Text>
              </View>
              <View style={{ backgroundColor: item.accent, padding: 10, paddingHorizontal: 16, borderRadius: 30 }}>
                <Text style={{ color: 'white' }}>{item.stacks2}</Text>
              </View>
              <View style={{ backgroundColor: item.accent, padding: 10, paddingHorizontal: 16, borderRadius: 30 }}>
                <Text style={{ color: 'white' }}>{item.stacks3}</Text>
              </View>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ color: themeColors.text, fontSize: 20, fontWeight: 'bold' }}>About Us</Text>
            <Text style={{ color: 'gray' }}>{item.desc}</Text>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ color: themeColors.text, fontSize: 20, fontWeight: 'bold' }}>Our Vision</Text>
            <Text style={{ color: 'gray' }}>{item.vis}</Text>
          </View>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ color: themeColors.text, fontSize: 30, fontWeight: 'bold' }}>Gallery</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={() => openImageModal(item.img1)}>
              <Image
                source={item.img1}
                style={{
                  width: 200,
                  height: 200,
                  marginRight: 12,
                  marginLeft: 18,
                  borderRadius: 20,
                  tintColor: item.pic === 'yes' ? '' : item.accent,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openImageModal(item.img2)}>
              <Image
                source={item.img2}
                style={{
                  width: 200,
                  height: 200,
                  marginRight: 12,
                  borderRadius: 20,
                  tintColor: item.pic === 'yes' ? '' : item.accent,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openImageModal(item.img3)}>
              <Image
                source={item.img3}
                style={{
                  width: 200,
                  height: 200,
                  marginRight: 12,
                  borderRadius: 20,
                  tintColor: item.pic === 'yes' ? '' : item.accent,
                }}
              />
            </TouchableOpacity>
          </ScrollView>
          <View style={{ marginBottom: 16 }}>
            <Text style={{ color: themeColors.text, fontSize: 30, fontWeight: 'bold' }}>Members</Text>
          </View>
          <View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
            <View style={{ paddingHorizontal: 16 }}>
              <Image
                source={{ uri: item.chair }}
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
              />
              <Text style={{ color: 'gray', paddingHorizontal: 10 }}>{item.cname}</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', paddingHorizontal: 11 }}>Chairperson</Text>
            </View>
            <View style={{ paddingHorizontal: 16 }}>
              <TouchableOpacity onPress={() => openImageModal({uri: item.vc})}>
              <Image
                source={{ uri: item.vc }}
                style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
              />
              </TouchableOpacity>
              <Text style={{ color: 'gray', paddingHorizontal: 7 }}>{item.vname}</Text>
              <Text style={{ color: 'black', fontWeight: 'bold', paddingHorizontal: 6 }}>Vice-Chairperson</Text>
            </View>
          </View>
           
        </View>
        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          <Text style={{ color: themeColors.text, fontSize: 24, fontWeight: 'bold' }}>
            Catch the latest updates, follow us!
          </Text>
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 16, marginTop: 30 }}>
          <TouchableOpacity onPress={() => item.wp === 'none' ? null : Linking.openURL(item.wp)}>
            <Image
              source={require('../assets/icons/whats.png')}
              style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginBottom: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => item.web === 'none' ? null : Linking.openURL(item.web)}>
            <Image
              source={require('../assets/icons/webs.png')}
              style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginBottom: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => item.insta === 'none' ? null : Linking.openURL(item.insta)}>
            <Image
              source={require('../assets/icons/inst.png')}
              style={{ width: 50, height: 50, borderRadius: 50, marginLeft: 40, marginBottom: 10, marginTop: -5 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => item.lk === 'none' ? null : Linking.openURL(item.lk)}>
            <Image
              source={require('../assets/icons/linkedin.png')}
              style={{ width: 40, height: 40, borderRadius: 50, marginLeft: 40, marginBottom: 10, marginTop: -2 }}
            />
          </TouchableOpacity>
          
        </View>
        <View style={{ marginBottom: ios ? 12 : 6 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginBottom: 2 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 2 }}></View>
          </View>

        </View>
        
      </SafeAreaView>
    


      {/* Modal to display selected image */}
      <Modal visible={isImageModalVisible} animationType="fade" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <TouchableOpacity onPress={closeImageModal}>
            <Image source={selectedImage} style={{ width: 300, height: 300 }} />
          </TouchableOpacity>
        </View>
      </Modal>
      
    </View>
    </ScrollView> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
