import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import '../config/clientoptions'
import MParticle from 'react-native-mparticle'

export default class Welcome extends Component {
  state ={
    email:"",
    password:"",
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Welcome, {CUSTOMER_NAME}!
        </Text>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#666"
          onChangeText={text => this.setState({email:text})}
        />
      <TextInput
        secureTextEntry
        style={styles.inputText}
        placeholder="Password..."
        placeholderTextColor="#666"
        onChangeText={text => this.setState({password:text})}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  title: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#6BF9CE',
    padding: 20,
    borderRadius: 5,
    width:"70%",
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
    textAlign:"center"
  },
  inputText: {
    height:50,
    width:"70%",
    backgroundColor: "#6BF9CE",
    borderRadius:5,
    justifyContent:"center",
    padding:20,
    marginBottom: 20
  }
});
