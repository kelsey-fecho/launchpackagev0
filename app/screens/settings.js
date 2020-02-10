import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MParticle from 'react-native-mparticle'


export default class Settings extends Component {

 render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us more about you. </Text>
    </View>
    );
  }
};

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
})
