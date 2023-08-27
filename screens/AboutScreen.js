import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,  // Import the Text component
  View,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.86;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
const ios = Platform.OS == 'ios';

const data = [
  {
    key: '0',
    photo: 'https://i.postimg.cc/nL5JbxM0/5.png',
    text: 'This is image 1',
  },
  {
    key: '1',
    photo: 'https://i.postimg.cc/bY5zcQSq/4.png',
    text: 'This is image 2',
  },
];

export default function App() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar />
      <SafeAreaView style={ios ? { marginBottom: -8 } : {}}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', marginLeft: 15, marginTop: 15 }}>About this App</Text>
        <Animated.FlatList
          data={data}
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width
            ];
            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-width * 0.7, 0, width * 0.7]
            });
            return (
              <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{
                  borderRadius: 18,
                  borderWidth: 10,
                  borderColor: 'transparent',
                  shadowColor: '#000',
                  shadowOpacity: 0.5,
                  shadowRadius: 30,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  borderRadius: 18,
                  padding: 12,
                  backgroundColor: 'transparent'
                }}>
                  <View style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    overflow: 'hidden',
                    alignItems: 'center',
                    borderRadius: 14,
                  }}>
                    <Animated.Image
                      source={{ uri: item.photo }}
                      style={{
                        width: ITEM_WIDTH * 1.4,
                        height: ITEM_HEIGHT,
                        resizeMode: 'cover',
                        transform: [
                          {
                            translateX
                          }
                        ]
                      }}
                    />
                  </View>
                  <Text style={{ fontSize: 18, marginTop: 10 }}>{item.text}</Text>
                </View>
              </View>
            );
          }} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
});
