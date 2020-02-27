/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from './constants';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Forgot from './screens/Forgot';
import Explore from './screens/Explore';
import Browse from './screens/Browse';
import Product from './screens/Product';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            height: theme.sizes.base * 4,
            backgroundColor: theme.colors.white, // or 'white
            borderBottomColor: 'transparent',
            elevation: 0, // for android
          },
          headerBackImage: <Text>Back</Text>,
          headerBackTitle: null,
          headerLeftContainerStyle: {
            alignItems: 'center',
            marginLeft: theme.sizes.base * 2,
            paddingRight: theme.sizes.base,
          },
          headerRightContainerStyle: {
            alignItems: 'center',
            paddingRight: theme.sizes.base,
          },

          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Settings" component={Settings} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

