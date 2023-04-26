import React from "react";
import { View, Text, TextInput,Image, StyleSheet, TouchableOpacity, Button}  from "react-native";
import ButtonGradient from "../components/ButtonLoad";


const FormScreen = ({navigation}) => {

  const handleClick = ()=>{
    
    navigation.navigate('FileScreen');
  }

   
 
    return (
        <View style={styles.container}>
  

        <Text style={styles.titulo}>Formulario de legalizacion.</Text>
        <Text style={styles.subTittle}>Por favor diligenciar los datos</Text> 
        <Text style={styles.text}  //placeholder
        >Seleccione un provedor</Text>
        <TextInput
        placeholder='Seleccione un provedor'
        style={styles.textInput}
        ></TextInput>
        <Text style={styles.text}  //placeholder
        >Valor</Text>
        <TextInput
        placeholder='Valor'
        style={styles.textInput}
        ></TextInput>
        <Text style={styles.text}  //placeholder
        >Descripcion</Text>
        <TextInput
        placeholder='Descripcion'
        style={styles.textInput}
        ></TextInput>
        <Text style={styles.text}  //placeholder
        >Numero de factura</Text>
        <TextInput
        placeholder='Numero de factura'
        style={styles.textInput}
        ></TextInput>
        <Text style={styles.text}  //placeholder
        >Tipo de gasto</Text>
        <TextInput
        placeholder='Tipo de gasto'
        style={styles.textInput}
        ></TextInput>

      <ButtonGradient onPress={handleClick}
      />

       
    </View>

    );

 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#000',
    marginTop: 50,
    padding: 20,
    textAlign: 'center',
  },
  subTittle:{
    
    fontSize: 15,
    color:'gray',
  },
  text: {
    marginLeft: 5,
    fontSize: 15,
    color: '#000',
    marginTop: 0,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#12519F',
    padding: 10,
    width: '70%',
    marginTop: 5,
    borderRadius: 10,
  },
  imgStyle: {
    marginTop: 100,
    width: 200,
    height: 200,
    padding: 20,

  },
  button: {

  },

});


export default FormScreen;