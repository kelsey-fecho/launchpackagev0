import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Ecomm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Ecomm Screen
        </Text>

        <TouchableOpacity
          onPress={() => alert('You just triggered a Product Impression.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Product Impression</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You just triggered a Product View.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Product View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You\'ve added an item to your cart')}
          style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You are checking out now.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('Purchase Complete!')}
          style={styles.button}>
          <Text style={styles.buttonText}>Purchase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert('You have returned your item.')}
          style={styles.button}>
          <Text style={styles.buttonText}>Refund</Text>
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
