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

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: '#1c1769',
    height: 40,
    width: 280,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 25,
  },
 
 text: {
   color: 'white',
 },

})

export default CustomButton;