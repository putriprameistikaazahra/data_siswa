import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./components/screens/login"
import Home from "./components/screens/home";
import Add from "./components/screens/add";
import Detail from "./components/screens/detail";
import Update from "./components/screens/update";

export default function App () {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="detail">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // style.vncn
});
