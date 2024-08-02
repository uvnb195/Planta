import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthLayout from './(auth)/_layout'
import TabsLayout from './(tabs)/_layout'

const index = () => {
    return (
        <>
            {1 < 2 ? <AuthLayout /> : <TabsLayout />}
        </>
    )
}

export default index