import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import '../config/clientoptions'
import MParticle from 'react-native-mparticle'

export default class Ecomm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
            Trigger events below to see how customer and product data is handled during your eCommerce flow.
        </Text>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product that was viewed', '5678', 29.99)
            //const impression = new MParticle.Impression('Test impression list name', [product])
            //const event = MParticle.CommerceEvent.createImpressionEvent([impression])

            MParticle.logCommerceEvent(event)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>{PRODUCT} Impression</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product for cart', '1234', 19.99)
            //const event = MParticle.CommerceEvent.createProductActionEvent(MParticle.ProductActionType.ProductView, [product])

            MParticle.logCommerceEvent(event)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>{PRODUCT} View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product for cart', '1234', 19.99)
            //const transactionAttributes = new MParticle.TransactionAttributes('Test transaction id')
            //const event = MParticle.CommerceEvent.createProductActionEvent(MParticle.ProductActionType.AddToCart, [product], transactionAttributes)

            MParticle.logCommerceEvent(event)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product for cart', '1234', 19.99)
            //const transactionAttributes = new MParticle.TransactionAttributes('Test transaction id')
            //const event = MParticle.CommerceEvent.createProductActionEvent(MParticle.ProductActionType.Checkout, [product], transactionAttributes)

            MParticle.logCommerceEvent(event)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product for cart', '1234', 19.99)
            //const transactionAttributes = new MParticle.TransactionAttributes('Test transaction id')
            //const event = MParticle.CommerceEvent.createProductActionEvent(MParticle.ProductActionType.Purchase, [product], transactionAttributes)

            MParticle.logCommerceEvent(event)
          }
          style={styles.button}>
          <Text style={styles.buttonText}>Purchase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            //const product = new MParticle.Product('Test product for cart', '1234', 19.99)
            //const transactionAttributes = new MParticle.TransactionAttributes('Test transaction id')
            //const event = MParticle.CommerceEvent.createProductActionEvent(MParticle.ProductActionType.Refund, [product], transactionAttributes)

            MParticle.logCommerceEvent(event)
          }
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
    margin: 15,
    justifyContent: 'center',
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
