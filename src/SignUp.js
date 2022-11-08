import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { darkGreen } from '../components/Constants';
import Btn from './Btn';
import Field from './Field';
import { firebase } from '../config';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import { useTheme } from 'react-native-paper';

// import { Container } from './styles';

const SignUp = (props) => {
  const {colors} = useTheme();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const registerUser = async (
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    phone
  ) => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
              firstName,
              lastName,
              email,
              phone,
            })
            .then(() => {
              alert('Collection created');
            })
            .catch((e) => {
              alert(e.message);
            });
        })
        .then(() => {
          alert('Account created');
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  };
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor='#00bea7' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Create Acount
        </Text>
      </View>
      <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: colors.background
                    }]}>
      <View style={styles.link}>
          <Text style={styles.text_prelink}>
            Do you have an account? {'\n'}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text style={styles.text_link}>
              SignIn
            </Text>
          </TouchableOpacity>
      </View>
      <View
          style={styles.textinput}
        >
          <Field
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <Field
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            onChangeText={(email) => setEmail(email)}
          />
          <Field
            placeholder="Contact Number"
            keyboardType={'number'}
            onChangeText={(phone) => setPhone(phone)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
          />
          <View style={styles.social} >
            <Text style={styles.join} >
              Or Join
            </Text>
          </View>
          <View style={styles.social_SignUp} >
            <AntDesign.Button
              name="google"
              backgroundColor="trw"
              size={45}
              color="#535353"
              onPress={''}
            />
            <FontAwesome.Button
              name="facebook"
              backgroundColor="trw"
              size={45}
              color="#535353"
              onPress={''}
            />
            <Entypo.Button
              name="linkedin"
              backgroundColor="trw"
              size={45}
              color="#535353"
              onPress={''}
            />
          </View>
          <View>
            <View style={styles.conditions} >
              <Text style={styles.text_prelink}>
                By signing in, you agree to our{' '}
              </Text>
              <Text style={styles.text_link} >
                Terms & Conditions
              </Text>
            </View>
            <View style={styles.conditions} >
              <Text style={styles.text_prelink}>and </Text>
              <Text style={styles.text_link} >
                Privacy Policy
              </Text>
            </View>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SignUp"
            Press={() => {
              registerUser(
                email,
                password,
                confirmPassword,
                firstName,
                lastName,
                phone
              );
              //props.navigation.navigate('SignIn');
            }}
          />
      </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '20%'
  },
  link: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,  
  },
  textinput:{
      height: 700,
      width: 400,
      borderTopLeftRadius: 120,
      paddingTop: 10,
      alignItems: 'center',
  },
  text_prelink:{
      color: 'black',
      fontSize: 14,
  },
  text_link:{
    color: darkGreen,
    fontWeight: 'bold',
    fontSize: 16 
  },
  conditions:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  social:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  social_SignUp:{
      display: 'flex',
      flexDirection: 'row',
      width: 200,
      justifyContent: 'space-between',
      marginTop: 5,
      marginVertical:5
  },
  join:{
      color: '#535353',
      fontSize: 24,
      fontWeight: 'bold',
  }

});

