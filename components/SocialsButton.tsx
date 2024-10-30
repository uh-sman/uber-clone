import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Button } from './ui/CustomButton'
type SocialButtonProps = {
    title: string,
    icon: ImageSourcePropType | undefined
    onPress: () => void,
}
const SocialsButton = ({ title, icon, onPress }: SocialButtonProps) => {
  return (
    <View className='mt-4 mx-2'>
      <Button onPress={onPress} className='bg-gray-300/50 shadow-none flex flex-row items-center gap-2' variant={"default"} size={"lg"}>
        <Image className='w-6 h-6' source={icon} resizeMode={"contain"}/>
        <Text className='font-semibold'>{title}</Text>
      </Button>
    </View>
  )
}

export default SocialsButton