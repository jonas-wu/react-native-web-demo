import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

function About() {
  return (
    <View>
      <Text>About</Text>
      <TouchableHighlight onPress={() => {
        console.log('pressed in abount');
      }}>
        <Text>Click me</Text>
      </TouchableHighlight>
    </View>
  )
}

export default About