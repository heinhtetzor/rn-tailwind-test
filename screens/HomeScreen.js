import React, { useLayoutEffect} from 'react';
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
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <View>
            <Text className="font-bold text-gray-400 text-xs"> some text </Text>
            <Text className="font-bold text-x;"> Header Title </Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
