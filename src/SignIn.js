import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import { darkGreen, graydark } from '../components/Constants';
import Btn from './Btn';
import Field from './Field';



const SignIn = (props) => {
  return (
    
      <View style={{ alignItems: 'center', width: 375}}>
        <Text
          style={{
            color: '#00bea7',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}> Login
        </Text>
        <View
          style={{
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 0,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: graydark,
              fontSize: 25,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
         <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View style={{alignItems: 'center', width: '88%', paddingRight: 16, marginBottom: 100}}>
          <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => alert("Logged In")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
   
  );
};

export default SignIn;