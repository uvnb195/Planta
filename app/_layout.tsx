import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const [fontLoaded] = useFonts({
        robotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
        robotoLight: require("../assets/fonts/Roboto-Light.ttf"),
        robotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
        robotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    })
    useEffect(() => {
        const prepare = async () => {
            await SplashScreen.preventAutoHideAsync()
        }
        prepare()
    }, [])

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
        </Stack>
    );
}

