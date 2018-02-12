import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import CardView from 'react-native-cardview' ;

import Api from './src/components/Api';
import Sample from './src/components/Sample';

import { AppRegistry } from 'react-native';


export default class App extends Component {
render() {
  console.log("this is me")
        return (
        <View>
            <Image source={require('./Assets/Title3.png')} />
          <Api/>
        </View>
  );
}
}
