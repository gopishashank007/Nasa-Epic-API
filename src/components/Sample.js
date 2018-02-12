import React, { Component } from 'react';

import { Platform, StyleSheet, Text, View,Image,TouchableHighlight,ScrollView } from 'react-native';

import CardView from 'react-native-cardview' ;

export default class Sample extends Component{

  render() {
    return (

      <View style={styles.MainContainer}>
        <ScrollView >
        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={25}
          style={styles.cardViewStyle}>
          <TouchableHighlight>
          <Image style={styles.image} source={{ uri:'https://facebook.github.io/react-native/docs/assets/favicon.png' }}/>
          </TouchableHighlight>
        </CardView>
        </ScrollView>
          <Text style={styles.cardView_OutsideText}> Simple CardView </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },

  cardViewStyle:{

    width: 250,
    height: 150,

  },
  image: {
      width: 250,
      height: 150,
     marginHorizontal: 8,
    //  resizeMode: "contain"
  },
  cardView_OutsideText:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginTop: 50
  },

});
