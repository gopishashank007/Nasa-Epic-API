import React, { Component } from 'react';
import
{
  Text,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
  AppRegistry,
  StyleSheet } from 'react-native';

//import { CardList } from 'react-native-card-list';
import CardView from 'react-native-cardview' ;
export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      captions:[],
      identifier:[]
    }
  }

    getData(){
      return fetch('https://api.nasa.gov/EPIC/api/natural/date/2015-10-31?api_key=QqlppMKjNsAxRvugONsWNYEkXm4IbrbugSgfn5Cc')
     .then((response) => response.json())
      .then((responseJson) => {
        // responseJson is the array of objects
      //  console.log("response.json : : " + responseJson);
        links_array = new Array();
        caption_array= new Array();
        identifier_array=new Array();
        len = responseJson.length;
         for(var i = 0; i < len; i++) {
          date_string = responseJson[i]["date"].split(" ")[0];
            year = date_string.split("-")[0];
            month = date_string.split("-")[1];
            date = date_string.split("-")[2];
            image_id = responseJson[i]["image"];
            links_array[i] = "https://epic.gsfc.nasa.gov/archive/natural/" + year + "/" + month + "/" + date + "/png/" + image_id + ".png";
            caption_array[i]=responseJson[i]["caption"];
            identifier_array[i]=responseJson[i]["identifier"];
         }
         //console.log("hey");
         //console.log(caption_array);
         //console.log(identifier_array);
         //console.log(responseJson.length);


         this.setState(existing => {
            return ({isLoading: false, data: links_array,captions:caption_array,identifier:identifier_array});
         });
   });
  }
  getDataHtml(){
    let links_array= this.state.data;
      console.log("test\n " + this.state.data);
      return ("how are you da?");
  }

  render() {
    console.log(this.state.isLoading);
    var display = "test";
  //  console.log("before if");

    if(this.state.isLoading){
      console.log("inside if");
      this.getData();
      display = "loading..."
    } else{
      console.log("inside else");
      display = this.getDataHtml();
    }
    console.log("before return....." + this.state.data);
    console.log("returning data" + this.state.captions);
    return (
      <View style={styles.MainContainer}>
        <ScrollView
        vertical={true}>
      {this.state.data.map((imageUri, i) =>
      <View key={i}>
      <CardView
          cardElevation={2}
          cardMaxElevation={2}
          cornerRadius={25}
          style={styles.cardViewStyle}>
      <TouchableHighlight key={i}>
      <Image style={styles.image} source={{ uri: imageUri }} key={i}/>
      </TouchableHighlight>
      </CardView>
      <Text style={styles.cardView_OutsideText}>{this.state.identifier[i]}</Text>
      <Text style={styles.cardView_OutsideText}>{this.state.captions[i]}</Text>
      </View>
    )}
    </ScrollView>
    </View>

    );
  }
}
const styles = StyleSheet.create({

  MainContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue' ,
    marginBottom: 180,
  },

  cardViewStyle:{
    left:110,
    width: 200,
    height: 160,
    backgroundColor: 'black' ,
  //  resizeMode: "contain"
  },
  image: {
      width: 180,
      height: 120,
    marginHorizontal: 8,
     marginBottom: 5,
   resizeMode: "contain"
  },
  cardView_OutsideText:{
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    //marginTop: 5
  }


});
