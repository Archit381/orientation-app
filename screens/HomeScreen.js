<<<<<<< HEAD
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


=======
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import { MapPinIcon } from 'react-native-heroicons/solid';
import ChapterCard from '../components/chapterCard';
import { useNavigation } from '@react-navigation/native';
>>>>>>> second_branch

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
<<<<<<< HEAD
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative bg-white">
      
=======
  const [filteredCoffeeItems, setFilteredCoffeeItems] = useState([]);
  const navigation = useNavigation();

  // Update filteredCoffeeItems when activeCategory changes
  
  useEffect(() => {
    const filteredItems = coffeeItems.filter(item => {
      return (
        item.tag1 === categories[activeCategory - 1].title.toLowerCase() ||
        item.tag2 === categories[activeCategory - 1].title.toLowerCase() ||
        item.tag3 === categories[activeCategory - 1].title.toLowerCase() ||
        item.tag4 === categories[activeCategory - 1].title.toLowerCase()
      );
    });
    setFilteredCoffeeItems(filteredItems);
  }, [activeCategory]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
>>>>>>> second_branch
      <StatusBar />

      <Image 
        source={require('../assets/images/bg1.jpg')} 
        style={{height: height*0.9,  borderBottomLeftRadius: 60, borderBottomRightRadius: 60}} 
        className="w-full absolute -top-5 " 
<<<<<<< HEAD
        blurRadius={10}/>
      <SafeAreaView className={ios? '-mb-8': ''}>
=======
        blurRadius={15}/>

      <SafeAreaView style={ios ? { marginBottom: -8 } : {}}>
>>>>>>> second_branch

        {/* University Logo and Name */}
        <View className="mx-4 flex-row  items-center space-x-20">
          <Image source={require('../assets/images/uni_logo.png')} 
            className="h-11 w-9" />
<<<<<<< HEAD
          
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
        <View className="mx-5 shadow" style={{marginTop: height*0.04}}>
         <Text style={{fontSize: 40}} className=" font-bold text-neutral-700">Let's Discover</Text>

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
=======
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 8 }}>
            <MapPinIcon size={25} color={themeColors.bgred} />
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Bennett University</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 16, shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 2, marginTop: 16 }}>
          <Text style={{ fontSize: 40, fontWeight: 'bold', color: themeColors.textNeutral }}>Let's Discover</Text>
>>>>>>> second_branch
        </View>

        {/* Adding Categories */}
        <View style={{ paddingHorizontal: 16, marginTop: 24, marginBottom: 50 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setActiveCategory(item.id)}
                style={{
                  backgroundColor: item.id === activeCategory ? themeColors.bgblue : 'rgba(0,0,0,0.07)',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 24,
                  marginRight: 8,
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 1,
                  shadowRadius: 2,
                }}
              >
                <Text style={{ fontWeight: 'bold', color: item.id === activeCategory ? 'white' : 'gray' }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </SafeAreaView>

<<<<<<< HEAD
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
        
=======
      {/* Adding Chapters/Clubs cards */}
      <View style={{ flex: 1, justifyContent: 'center', marginTop: ios ? 32 : 0 }}>
        <Carousel
          data={filteredCoffeeItems}
          renderItem={({ item }) => <ChapterCard item={item} />}
          firstItem={1}
          loop={true}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={width}
          itemWidth={width * 0.63}
          slideStyle={{ alignItems: 'center' }}
        />
>>>>>>> second_branch
      </View>
    </View>
  );
}
