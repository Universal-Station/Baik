import React from "react";
import { View, Text, StyleSheet} from 'react-native';
import Background from "./Background";


const Home = () => {
    return(
        <Background>
            <Text style={{color: 'white', fontSize: 64}}> HOLA MUNDO</Text>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;