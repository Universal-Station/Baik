import * as React from 'react';
import { View, Text,} from 'react-native';
import {NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import { SvgUri } from 'react-native-svg';
import { DrawerContent } from './src/DrawerContent';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
import MainTabScreen from './src/MainTabScreen';
import SignUp from './src/SignUp';

function LogoTitle() {
  return (
   <SvgUri width="120" height="40"
   uri="https://raw.githubusercontent.com/Universal-Station/Baik-images/main/assets/Baik.svg" />
  )
}

const Drawer = createDrawerNavigator();

function App(){
  return(
    <PaperProvider>
    <NavigationContainer>
      <Drawer.Navigator  screenOptions={{headerShown: false }}>
      <Drawer.Screen name="Home" component={MainTabScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Drawer.Screen name="Signup" component={SignUp}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}



export default App