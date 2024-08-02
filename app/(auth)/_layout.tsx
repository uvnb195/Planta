import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {

    return (
        <SafeAreaView className=' items-center flex-1'>
            <Image source={images.welcomeImage}
                className='w-full'
                resizeMode='cover' />

            <StatusBar style='dark' />
        </SafeAreaView>
    )
}

export default AuthLayout