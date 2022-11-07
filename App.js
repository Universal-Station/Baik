import * as React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import { SvgUri } from 'react-native-svg';
import { DrawerContent } from './src/DrawerContent';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { firebase } from './config';
import MainTabScreen from './src/MainTabScreen';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn';
import Profile from './src/Profile';

function LogoTitle() {
  return (
    <SvgUri
      width="120"
      height="40"
      uri="https://raw.githubusercontent.com/Universal-Station/Baik-images/main/assets/Baik.svg"
    />
  );
}

const Drawer = createDrawerNavigator();

function App() {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState(true);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  React.useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator screenOptions={{ headerShown: true }}>
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="Profile" component={Profile} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen
            name="Home"
            component={MainTabScreen}
            options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
           <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
