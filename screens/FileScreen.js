import React from "react";
import { View, Text,Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import ButtonGradient from "../components/ButtonLoad2";


const FileScreen = ({ navigation }) => {
    


    return (
        <View style={styles.Container}>
            <Text style={styles.Text}> Subir un archivo </Text>
            <Text style={styles.Text2}> Por favor subir el archivo de la factura, recuerda que no debe de pesar mas de 100mb.</Text>
            
            <Image 
                style={styles.image}
                source={require('../assets/image8.png')} 
              />

              <ButtonGradient/>
        </View>

    );
    
    function UploadImage(){
        <ScrollView 
            horizontal
            style
        >

        </ScrollView>
    }


 }
 const styles = StyleSheet.create({
    Container: {
      flex: 1,
       backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    Text: {
        alignItems: 'center',
        fontSize: 30,
        marginTop:30,
        marginBottom: 30,
    
    },
    Text2: {
        padding: 30,
    },
    image: {
    
        width: 216,
        height: 225,
        margin: 30,
        alignItems: 'center',


      },
    
  });

export default FileScreen;