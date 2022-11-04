import * as React from 'react';
import { ScrollView, StatusBar,Text,View } from 'react-native';
import Swiper from 'react-native-swiper';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from '../components/Constants';




const Home=(props)=>{
    return(
        <Background>
        <View style={{marginHorizontal: 30, marginVertical: 20 }}>
        <Btn bgColor='white' textColor={darkGreen} btnLabel="SignUp"  Press={() => props.navigation.navigate("SignUp")}/>
        </View>
        </Background>
 
    )
}

export default Home;