import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Map from '../components/Map';

const MapScreen = () => {
    return (
      <View>
        <Text>This is ze map screen</Text>
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}></View>
      </View>
    );
}

export default MapScreen

const styles = StyleSheet.create({})
