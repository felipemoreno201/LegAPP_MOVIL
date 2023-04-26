import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LogScreen from '../screens/LogScreen';


export function TwoImages(props) {
  const { onPress } = props;
  const { onPress2 } = props;
        return (
          <View style={styles.container}>
            <TouchableOpacity
            onPress={onPress}
            >

              <Image 
                style={styles.image}
                source={require('../assets/image6.png')} 
              />
              <Text style={styles.Text}> Mis gastos </Text>
              </TouchableOpacity>

            <TouchableOpacity
             onPress={onPress2}
            >
            
            <Image
              style={styles.image}
              source={require('../assets/image5.png')}
              />
              <Text style={styles.Text}> Registrar gastos </Text>
            </TouchableOpacity>
            
            
          </View>

        );
      
      
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#12519F'
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  image: {
    
    width: 100,
    height: 100,
    margin: 30,
  },
  Text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#12519F',
    
  }
});

export default TwoImages;