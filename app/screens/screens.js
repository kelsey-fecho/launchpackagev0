import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Screens
        </Text>
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
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
