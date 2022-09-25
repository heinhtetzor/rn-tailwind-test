import React, {useLayoutEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <View className="h-screen pb-3 mt-10 backdrop-blur-100 bg-slate-800 backdrop-blur-lg">
        <Text className="font-bold text-gray-400 text-7xl"> LEEEE LARR </Text>
        <Text className="font-bold text-8xl text-green-500">
          {' '}
          PHINN KHAN LITE{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
