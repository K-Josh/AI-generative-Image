import { Redirect, router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/CustomButton';

export default function TabLayout() {
  

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full min-h-[85vh] px-4 items-center'>
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
           source={images.cards}
           className='max-w-[380px] w-full h-[300px] -mt-8'
           resizeMode='contain'
          />

          <View className='relative -mt-5'>
            <Text className='text-3xl font-bold text-center text-white'>
              Discover Endless Possibilities with {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>

            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-3 -right-8'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm text-gray-100 mt-7 font-pregular text-center'>
          Where creativity meets innovation: embark on a journey of limitless exploration with Aora
        </Text>

        <CustomButton 
            title='Continue with Email'
            handlePress={() => router.push('/sign-in') }
            containerStyles="w-full mt-7" 
         />
        </View>
      </ScrollView>

{/* helps you if u want to show your statusbar */}
      <StatusBar backgroundColor='#161633' style='light'/>
    </SafeAreaView>
  );
}

