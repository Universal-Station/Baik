//import liraries
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Background from './Background';

// create a component
function LogoTitle() {
    return (
      <SvgUri
        width="120"
        height="40"
        uri="https://raw.githubusercontent.com/Universal-Station/Baik-images/main/assets/Baik.svg"
      />
    );
  }


const SplashScreen = ({navigation}) => {
    const {colors} = useTheme();
    return (
        <View style={styles.container}>
                <StatusBar backgroundColor='#00bea7' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>Find the best route for your adventure!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=> { navigation.navigate('SignUp') }}>
                <LinearGradient
                    colors={['#00bea7', '#00bea7']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
        
    );
};

//make this component available to the app
export default SplashScreen;


const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#00bea7'
    },
    header:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal:30 
    },
    logo:{
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color:'grey',
        marginTop: 5
    },
    button:{
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn:{
        width:150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign:{
        color:'white',
        fontWeight: 'bold'
    }
});


