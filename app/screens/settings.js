import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Settings extends Component {
  static navigationOptions = {
   headerTitle: () => <LogoTitle />,
   headerRight: () => (
     <Button
       onPress={() => alert('This is a button!')}
       title="Info"
       color="#fff"
     />
   ),
 };

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
