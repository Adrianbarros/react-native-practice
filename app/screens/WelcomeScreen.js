import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'


function WelcomeScreen(props) {
    const { landscape } = useDeviceOrientation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: .25, flexDirection: 'column', height: '25%', width: landscape ? '50%' : '90%', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: '1', backgroundColor: '#000', width: '100%' }} />
                <View style={{ flex: '1', backgroundColor: '#333', width: '75%' }} />
                <View style={{ flex: '1', backgroundColor: '#aaa', width: '40%' }} />
            </View>
            <Text >Hello World!</Text>
            <Image source={require('../assets/favicon.png')} />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default WelcomeScreen;