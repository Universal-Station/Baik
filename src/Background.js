import React from 'react';
import { ImageBackground, View } from 'react-native';
const image = { uri: 'https://github.com/Universal-Station/Baik-images/blob/f6c098ff76f49b52ca07f62a769fda6204f0e6b3/assets/iPhone%2013%20Pro%20Max%20-%208.png?raw=true' };
// import { Container } from './styles';

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={image}
        style={{height: '100%'}} />
        <View style ={{position: "absolute"}}>
            {children}
        </View>
    </View>
  );
}


export default Background;