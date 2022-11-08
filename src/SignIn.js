import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useTheme } from 'react-native-paper';
import { darkGreen, graydark } from '../components/Constants';
import Btn from './Btn';
import Field from './Field';
import * as Animatable from 'react-native-animatable';
import {firebase} from '../config';

const SignIn = (props) => {
  const {colors} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (
    email,
    password
  ) =>{
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    }catch (e){
      console.log(e)
    }
  }

  return (
    
      <View style={styles.container}>
          <StatusBar backgroundColor={darkGreen} barStyle="light-content"/>
        <View style={styles.header}>
        <Text style={styles.text_header}>
           Login
        </Text>
        </View>
        <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: colors.background
                    }]}>
          <View style={styles.link}>
          <Text>
            Login to your account
          </Text>
          </View> 
          <View style={styles.textinput}>     
         <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={(email) => setEmail(email)}
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
           />
          </View> 
          <View style={styles.content}>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
        
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login"  Press={() => loginUser(email,password)} />
          <View style={styles.signup}>
          <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
          <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
          </TouchableOpacity>
          </View>
          </View>
        </Animatable.View>
      </View>
   
  );
};

export default SignIn;

const styles= StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_header:{
    color: '#00bea7',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 20,
    marginTop: '20%'
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,  
  },
  textinput:{
      borderTopLeftRadius: 120,
      paddingTop: 10,
      alignItems: 'center',
  },
  content:{
    alignItems: 'center',
    marginTop: 10
  },
  signup:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20
  }
})