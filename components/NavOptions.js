import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const options =[
    {
        id: "101",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "102",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    return (
        <FlatList
            data = {options}
            horizontal
            keyExtractor = {(item) => item.id}
            renderItem = {({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                >
                    <View>
                        <Image 
                            style = {{ width: 120, height: 120, resizeMode: "contain" }}
                            source = {{ uri: item.image }}
                        />
                        <Text style = {tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                        style = {tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name = "arrowright" color="white" type="antdesign" />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions