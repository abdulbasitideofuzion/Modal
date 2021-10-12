import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalComponent(props) {


    const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);
    return (
        <View style={styles.main}>
      <Text style={styles.heading}>Modal Example</Text>
      <View style={styles.separator} />
      <Button title="button" onPress={handleModal} />
      <Modal isVisible={isModalVisible} backdropColor={"#FFFFFFB3"}>
        <View style={styles.modalconatainer}>
          <Text style={styles.text}>Set on Screen?</Text>
            <View style={styles.buttoncon}>
          <Text style={styles.button} onPress={()=> console.log("Yes")}>Yes</Text>
          <Text style={styles.button} onPress={handleModal}>Cancel</Text>
          </View>
        </View>
      </Modal>
    </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent:"flex-start",
    
      },
      heading: {
        fontSize: 20,
        fontWeight: "bold",
      },
      buttoncon:{
         flexDirection:"row",
        justifyContent:"center",
        top:50,
      },
      text: {
        top:30,
        fontSize: 26,
        fontWeight: "400",
        textAlign: "center",
        color:"#FFFFFF"
      },
      button:{
        width:90,
        color:"#FFFFFF",
        margin:30,
        fontSize:20,
        backgroundColor:"grey",
        borderRadius:20,
        alignContent:"center",
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",
        textAlign:"center"
       },
      separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
      },
      modalconatainer:{
          padding:20,
          height:"30%",
          backgroundColor:"#000000",
          borderRadius:30,
          
      }
})
export default ModalComponent;