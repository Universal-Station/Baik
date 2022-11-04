import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { darkGreen } from '../components/Constants';
import Btn from './Btn';
import Field from './Field';

// import { Container } from './styles';

const SignUp = () => {
  return (
  <View style={{alignItems: 'center',flex:1, width: 380, marginVertical:80}}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 38,
          }}>
          Create acount
        </Text>
        <View  style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop:10
            }}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 16,
                    
                }}>
            Do you have an account? {"\n"}
            </Text>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text
                    style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                      SignIn
                 </Text>
            </TouchableOpacity>   
        </View>
        <View  style={{
            height: 700,
            width: 400,
            borderTopLeftRadius: 120,
            paddingTop: 50,
            alignItems: 'center',
          }}>
             <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width:300,
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
             Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          </View>
  </View>

  )
}

export default SignUp;