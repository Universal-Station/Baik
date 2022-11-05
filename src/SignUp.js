import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
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

// import { Container } from './styles';

const SignUp = (props) => {
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
      <View style={styles.textWrapper}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          Create acount
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: 'black',
              fontSize: 16,
            }}
          >
            Do you have an account? {'\n'}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text
              style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}
            >
              SignIn
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 700,
            width: 400,
            borderTopLeftRadius: 120,
            paddingTop: 10,
            alignItems: 'center',
          }}
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: '#535353',
                fontSize: 24,
                fontWeight: 'bold',
              }}
            >
              Or Join
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: 200,
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
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
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: 300,
                marginTop: 10,
              }}
            >
              <Text style={{ color: 'grey', fontSize: 15 }}>
                By signing in, you agree to our{' '}
              </Text>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 15 }}
              >
                Terms & Conditions
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: 'grey', fontSize: 15 }}>and </Text>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 15 }}
              >
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
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: 380,
  },
  textWrapper: {
    alignItems: 'center',
    height: hp('70%'), // 70% of height device screen
    width: wp('80%'), // 80% of width device screen
  },
});
