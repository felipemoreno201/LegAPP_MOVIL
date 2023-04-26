import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';




export default function ButtonGradient1(props) {
    const { onPress } = props;
    return(
        <TouchableOpacity 
        style={styles.Container}
        onPress={onPress}
        >
            
            <LinearGradient 
                // Button Linear Gradient
                colors={['#12519F', '#3b5998']}
                style={styles.button}
                >
                <Text style={styles.text}> Cerrar sesión</Text>
            </LinearGradient>
        </TouchableOpacity>

    );
    
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 60,
        
        
        alignItems: 'center',
        width: '40%',
    },
    text: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
      },
      button: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
    },
  
  });