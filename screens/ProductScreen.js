import { View, Text, TouchableOpacity, Image, Dimensions,StyleSheet, Platform,ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { themeColors } from '../theme';
import {clubItems } from '../constants';
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} >
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={item.bgimage} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute " />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>
        <View 
          style={{
            shadowColor: themeColors.bggray,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60" style={{marginTop: ios? 0:40}} />
        </View>
        
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-3xl font-semibold">
              {item.name}
            </Text>
            
            
        </View>
        <View className="px-4 space-y-2">
          <View className="flex-row justify-between">
            <View style={{backgroundColor: item.accent}} 
             className="p-3 px-4 rounded-full">
              <Text className={"text-white"}>{item.stacks1}</Text>
            </View>
            <View style={{backgroundColor: item.accent}} 
              className="p-3 px-8 rounded-full">
              <Text className={"text-white"}>{item.stacks2}</Text>
            </View>
            <View style={{backgroundColor: item.accent}} 
             className="p-3 px-8 rounded-full">
              <Text className={"text-white"}>{item.stacks3}</Text>
            </View>
          </View>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{fontSize: 20,color: themeColors.text}} className="text-lg font-bold">About Us</Text>
          <Text className="text-gray-600">
            {item.desc}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{fontSize: 20,color: themeColors.text}} className="text-lg font-bold">Our Vision</Text>
          <Text className="text-gray-600">
            {item.vis}
          </Text>
        </View>

        <View className="px-4 py-54 space-y-4">
          <Text style={{fontSize: 30,color: themeColors.text}} className="text-lg font-bold">Gallery</Text>  
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image             
              source={item.img1}
              style={{ width: 200, height: 200, marginRight: 12,marginLeft: 18, borderRadius: 20, tintColor: item.pic ==='yes' ? '': item.accent}}
          />
          
          <Image
              source={item.img2}
              style={{ width: 200, height: 200, marginRight: 12, borderRadius: 20, tintColor: item.pic ==='yes' ? '': item.accent}}
          />
          <Image       
              source={item.img3}
              style={{ width: 200, height: 200, marginRight: 12, borderRadius: 20, tintColor: item.pic ==='yes' ? '': item.accent}} 
          />
        </ScrollView>
        <View className="px-4 py-54 space-y-4">
          <Text style={{fontSize: 30,color: themeColors.text}} className="text-lg font-bold">Members</Text>  
        </View>
        <View className={'px-4 flex-row'}>
          <View className={'px-4'}>
            <Image 
                source={item.chair}
                style={{width: 100, height: 100, borderRadius: 50,marginLeft: 40, marginBottom: 10,}}/>
            <Text className="text-gray-600 px-10">{item.cname}</Text>    
            <Text className="text-black-600 font-bold px-11">Chairperson</Text>
          </View>
          <View className={'px-4'}>
          <Image 
              source={item.vc}
              style={{width: 100, height: 100, borderRadius: 50,marginLeft: 30, marginBottom: 10,}}/>
            <Text className="text-gray-600 px-7">{item.vname}</Text>    
            <Text className="text-black-600 font-bold px-6">Vice-Chairperson</Text>
          </View>
        </View>
         
        
        
      </SafeAreaView>
      <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">Catch the latest updates, follow us!</Text>

        </View>
      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          <View className="flex-row justify-between items-center px-4 mb-2">
              <View className="flex-row items-center space-x-1">               
              </View>
          </View>
        </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});