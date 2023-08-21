import { View, Text, Image, TouchableOpacity, TextInput, FlatList,SectionList, Dimensions, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import ChapterCard from '../components/chapterCard';
import { useNavigation } from '@react-navigation/native'



const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative bg-white">
      
      <StatusBar />

      <Image 
        source={require('../assets/images/bg1.jpg')} 
        style={{height: height*0.9,  borderBottomLeftRadius: 60, borderBottomRightRadius: 60}} 
        className="w-full absolute -top-5 " 
        blurRadius={10}/>
      <SafeAreaView className={ios? '-mb-8': ''}>

        {/* University Logo and Name */}

        <View className="mx-4 flex-row  items-center space-x-20">
          <Image source={require('../assets/images/uni_logo.png')} 
            className="h-11 w-9" />
          
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgred} />
            <Text className="font-semibold text-base">
              Bennett University
            </Text>
          </View>
          
        </View>

        {/* Search Bar 

        <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.bgred}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        */}
        <View className="mx-5 shadow" style={{marginTop: height*0.09}}>
         <Text style={{fontSize: 30}} className="font-bold text-neutral-700">Let's Discover</Text>

        </View>

    
          
        {/* Adding Catgeories from index.js*/}

        <View className="px-5 mt-6">
          <ScrollView horizontal={false}></ScrollView>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            className="overflow-visible"
            renderItem={({item})=>{
              isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-gray-700';
              return (
                <TouchableOpacity 
                onPress={()=> setActiveCategory(item.id)}
                style={{backgroundColor: isActive? themeColors.bgblue: 'rgba(0,0,0,0.07)'}} 
                className="p-4 px-5 mr-2 rounded-full shadow">
                  <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
          
      </SafeAreaView>

      {/* Adding Chapters/Clubs cards   */}

      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            renderItem={({item})=> <ChapterCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width*0.63}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
        
      </View>
      
      
    </View>
  )
}
