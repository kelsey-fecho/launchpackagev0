import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import '../config/clientoptions'

export default class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Screens
        </Text>

        <TouchableOpacity
          onPress={() => alert('You just triggered a Page View event for the Home screen.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You just triggered a Page View event for your account page.')}
          style={styles.button}>
          <Text style={styles.buttonText}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You just triggered a Page View event for Weekly Deals.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Weekly Deals</Text>
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
    backgroundColor: '#6bfacf',
    padding: 20,
    borderRadius: 5,
    margin: 15,
    width: 200,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#1f1f1f',
    textAlign: 'center'
    },
});
