import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import '../config/clientoptions'
import MParticle from 'react-native-mparticle'

export default class Event extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Click below to trigger mParticle Events.
        </Text>

        <TouchableOpacity
          onPress={() => MParticle.logEvent('Navigation Event', MParticle.EventType.Navigation, { 'Test key': 'Test value' })}
          style={styles.button}>
          <Text style={styles.buttonText}>Navigation Event</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => MParticle.logEvent('Search Event', MParticle.EventType.Search, { 'Test key': 'Test value' })}
          style={styles.button}>
          <Text style={styles.buttonText}>Search Event</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => MParticle.logEvent('Other Event', MParticle.EventType.Other, { 'Test key': 'Test value' })}
          style={styles.button}>
          <Text style={styles.buttonText}>Other Event</Text>
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
    color: '#fff'
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
