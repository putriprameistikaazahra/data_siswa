import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

import CustomButton from './CustomButton'

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../assets/logosiswa.png')} />
      <Text style={styles.title}>Hallo Students!</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />


<TouchableOpacity>
<CustomButton title= "Masuk"
onPress={() => {navigation.navigate('Home')}}/>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#5FBDFF',
    padding: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },


  input: {
    height: 40,
    width: 280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#808080',
    borderColor: '#96EFFF',
    borderRadius: 5,
    backgroundColor: '#DCDCDC',
  },

  forgotPasswordText: {
    color: 'white',
  },
  forgotPasswordBtn: {
    alignItems: 'flex-end',
    width: '80%',
    marginTop: 10,
  },
});