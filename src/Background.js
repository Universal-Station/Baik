import React from 'react';
import { ImageBackground, View } from 'react-native';

// import { Container } from './styles';

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/background.jpeg")}
        style={{height: '100%'}} />
        <View style ={{position: "absolute"}}>
            {children}
        </View>
    </View>
  );
}


export default Background;