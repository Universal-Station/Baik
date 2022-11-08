
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';


import Home from './Home';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();


const MainTabScreen = () => {
    return (
        <Tab.Navigator initialRouteName='Home' activeColor="#fff">
            <Tab.Screen
                name="Explore"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarColor:  '#FF6347',
                    tabBarIcon: ({color}) =>(
                        <Icon name="ios-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Help"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Help',
                    tabBarColor:  '#FF6347',
                    tabBarIcon: ({color}) =>(
                        <Icon name="help-circle-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Contacts"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Contacts',
                    tabBarColor:  '#FF6347',
                    tabBarIcon: ({color}) =>(
                        <Icon name="people" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Store"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Store',
                    tabBarColor:  '#FF6347',
                    tabBarIcon: ({color}) =>(
                        <Icon name="cart" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default MainTabScreen;

const HomeStackScreen = ({navigation}) =>{
    const {colors} = useTheme();
    return(
        <HomeStack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'baik finder',
                    headerLeft: ()=>(
                        <View style={{marginLeft: 10}}>
                            <Icon.Button
                                name="ios-menu"
                                size={colors.text}
                                backgroundColor={colors.background}
                                onPress={() => navigation.openDrawer()}
                                />
                        </View>
                    ),
                    headerRight: () => (
                      <View style={{flexDirection: 'row', marginRight: 10}}>
                        <Icon.Button
                          name="ios-search"
                          size={25}
                          color={colors.text}
                          backgroundColor={colors.background}
                          onPress={() => {}}
                        />
                        <TouchableOpacity
                          style={{paddingHorizontal: 10, marginTop: 5}}
                          onPress={() => {
                            navigation.navigate('Profile');
                          }}>
                          <Avatar.Image
                            source={{
                              uri:
                                'https://pbs.twimg.com/profile_images/1364491704817098753/V22-Luf7.jpg',
                            }}
                            size={30}
                          />
                        </TouchableOpacity>
                      </View>
                    ),
                }}>

            </HomeStack.Screen>
        </HomeStack.Navigator>

    )
}