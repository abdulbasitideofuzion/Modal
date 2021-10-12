/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { useState } from "react";
import { Button, Text, View,StyleSheet } from "react-native";
import ModalComponent from "./Components/ModalComponent";


const App= ()  => {

  return (
 <ModalComponent/>
  );
};

const styles = StyleSheet.create({
 
main:{
  flex:1,
  
  flexDirection:'column',
  justifyContent:'center'
  
},
but:{  
  backgroundColor:'#000fff',
},
heading:{
  color:"black",
}
});

export default App;
