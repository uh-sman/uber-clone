import { View, Text } from 'react-native'
import React from 'react'

const CustomDivider = () => {
  return (
    <View className="flex-row mt-4 items-center px-2">
    <View className="bg-gray-300 w-[40vw] h-[2px]"></View>
    <Text className="text-gray-300 w-[10vw] pl-3">or</Text>
    <View className="bg-gray-300 w-[43vw] h-[2px]"></View>
   </View>
  )
}

export default CustomDivider