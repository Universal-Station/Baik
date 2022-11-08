//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SplashScreen from './SplashScreen';
import SignIn from './SignIn';
import SignUp from './SignUp';



const RootStack = createStackNavigator();

// create a component
const RootStackScreen = () => {
    return (
        <RootStack.Navigator screenOptions={{headerShown: false}} >
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignIn" component={SignIn}/>
            <RootStack.Screen name="SignUp" component={SignUp}/>
        </RootStack.Navigator>
    );
};

export default RootStackScreen;
