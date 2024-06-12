import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'
import { TouchableOpacity } from 'react-native'

const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-1 ${otherStyles}`}>
      <Text className='text-gray-100 text-base font-pmedium'>{title}</Text>

      <View className='border-2 border-black-200 w-full h-16 px-3 rounded-2xl items-center focus:border-secondary flex-row'>
        <TextInput 
         className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image 
                  source={!showPassword ? icons.eye : icons.eyeHide}
                  resizeMode='contain'
                  className='w-6 h-6'
                 />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField