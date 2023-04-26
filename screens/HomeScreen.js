import React from "react";
import { View, Text,Image, StyleSheet, TouchableOpacity } from "react-native";
import TwoImages from "../components/TwoImages";
import BarSup from "../components/BarSup";
import ButtonGradient1 from "../components/ButtonExit";


const HomeScreen = ({ navigation }) => {
    const handleClick1 = ()=>{
    
        navigation.navigate('LogScreen');
      }
    const handleClick = ()=>{
    
        navigation.navigate('FormScreen');
      }
    return (
        <View style={styles.Container}>
            <BarSup
            />
            
            <Text style={styles.Text} >¡Gasta sin complicaciones! Si quiere legalizar un gasto, presione en “Registrar gasto” Si quiere ver el sus gastos presione en “Mis gastos”
            </Text>
            <TwoImages onPress2={handleClick}
            />
            <ButtonGradient1 onPress={handleClick1}
            />
          
        </View>

    );

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
       
        width: '80%',
    },
    
  });

export default HomeScreen;