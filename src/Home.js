import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Background from "./Background";
import Btn from "./Btn";
import { FontAwesome } from "@expo/vector-icons";
import { darkGreen, green } from './Constants';

const Separator = () => (
    <View style={styles.separator} />
  );

const Home = (props) => {
    return(
        <Background>
            <View style={{marginHorizontal: 30, marginVertical: 100 }}>
            <Text style={{color: 'white', fontSize: 64}}> WELCOME </Text>
            <Text style={{color: 'white', fontSize: 64}}>  TO BAIK</Text>
            <View style={styles.Container} >
            <FontAwesome.Button  size={26} style={styles.Button} name="sign-in" backgroundColor="#777" borderRadius={100} onPress={() => props.navigation.navigate("Login")}>
            <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Login with password</Text>
            </FontAwesome.Button>
            <Separator />
            <FontAwesome.Button size={26} style={styles.Button} name="facebook" backgroundColor="#3b5998" borderRadius={100} onPress={''}>
             <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Login with Facebook</Text> 
            </FontAwesome.Button>
            <Separator />
            <FontAwesome.Button  style={styles.Button}  name="google" backgroundColor="#dd4b39"  size={26} borderRadius={100} onPress={''}>
            <Text style={{fontSize: 20, color: "white", fontWeight: "bold"}}>Login with Google</Text>
            </FontAwesome.Button>
            </View>
            <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")}/>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    Container:{
       flex: 1,
        paddingVertical:5,
        marginVertical:10,
        width:350,
        fontSize: 25,
        
    
    },
    Button:{
        paddingVertical:3,
        marginVertical:10,
        fontStyle: "bold",
        justifyContent:"center",
        padding:80
       
    },
    separator: {
        marginVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

})


export default Home;