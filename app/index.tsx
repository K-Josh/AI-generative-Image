import { Link, Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-black'>Aora!</Text>
      <Link href='/home'>Go to Home </Link>
      <StatusBar style='auto'/>
    </View>
  );
}

