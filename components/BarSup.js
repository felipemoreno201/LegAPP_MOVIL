import React from 'react';
import { View,Text, Image, StyleSheet } from 'react-native';
import ButtonGradient1 from './ButtonExit.js';




export function BarSup(){
    
        return (
        <View style={styles.Container1}>
             <Text style={styles.Text}>Bienvenido a legAPP
            </Text>
            <Text style={styles.Text1}>Contactos
            </Text>
            <Text style={styles.Text1}>Nosotros
            </Text>
            <Image
            style={styles.Image}
            
            source={require('../assets/image7.png')}
            />
        </View>
        
        );
      
      
}


const styles = StyleSheet.create({
    Container1: {
        flexDirection: 'row',
        width: "100%",
        padding: 10,
        backgroundColor: '#12519F',
        marginBottom: 60,
        //alignItems: 'center',
        //justifyContent: 'center',
      },
      Text1: {
        marginLeft: 30,
        color: '#fff',
    },
    Text: {
      color: '#fff',
  },
     Image: {
        marginLeft: 20,
        width: 23,
        height: 23,
        
      },
});

export default BarSup;