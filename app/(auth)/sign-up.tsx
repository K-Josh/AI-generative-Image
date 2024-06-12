import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native' 

import {images} from '../../constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const SignUp = () => {
  const [form, setForm] = useState({username: '', email: '', password: ''})
  const submit = () => {}

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
         <View className='w-full justify-center min-h-[85vh] my-6 px-4'>
           <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
           <Text className='text-white text-xl font-psemibold mt-5'>Sign up to join Aora Today!</Text>
            <FormField 
              title= 'Username'
              value={form.username}
              handleChangeText={(e) => setForm({...form, username: e})}
              otherStyles='mt-10'
            />
            <FormField 
              title= 'Email'
              value={form.email}
              handleChangeText={(e) => setForm({...form, email: e})}
              otherStyles='mt-7'
              keyboardType='email-address'
            />
            <FormField 
              title= 'Password'
              value={form.password}
              handleChangeText={(e) => setForm({...form, password: e})}
              otherStyles='mt-7'
            />
            <CustomButton 
              title='Sign Up'
              handlePress={submit}
              containerStyles='mt-7'
              textStyles='text-[15px]'
            />

            <View className='pt-5 text-center justify-center items-center flex-row gap-2'>
              <Text className='text-gray-200 font-pregular text-lg'>
                Have an account?
              </Text>
              <Link href='/sign-in'
                className='font-psemibold text-secondary-200'
              >Sign In</Link>
            </View>
         </View>
      </ScrollView>

      <StatusBar style='light' backgroundColor='#161622'/>
    </SafeAreaView>
  )
}

export default SignUp