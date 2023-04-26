import React, { useState } from "react";
import { View, Text, TextInput,Image, StyleSheet, TouchableOpacity, Button}  from "react-native";
import ButtonGradient from "../ButtonGradient";
import axios from "axios";

const LogScreen = ({navigation}) => {

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleClick = ()=>{
    
    axios.post('http://localhost:4500/getUser', {
          email: userName,
          password: password
        })
        .then(response => {
          //console.log(response.data);
          if(response.data["message"]=="user Administrador found"){
            navigation.navigate('HomeScreen');
          }
          // manejar la respuesta exitosa aquí
        })
        .catch(error => {
          console.log(error);
         // manejar el error aquí
        });

    
  }

    return (
        <View style={styles.container}>
          
          <Image source = { require('../assets/image4.png') } 
      style={styles.imgStyle}
      ></Image>

        <Text style={styles.titulo}>Inicio de sesión.</Text>
        <Text style={styles.subTittle}>Bienvenido a legAPP</Text> 
        <Text style={styles.text}  //placeholder
        >Email</Text>
        <TextInput
        placeholder='Correo@gmail.com'
        onChangeText={setUserName}
        value={userName}
        
        style={styles.textInput}
        ></TextInput>


        <Text  style={styles.text}  //placeholder
        >Contraseña</Text>
        <TextInput 
        secureTextEntry={true}
        placeholder='Introduce tu contraseña'
        onChangeText={setPassword}
        value={password}
        style={styles.textInput}
        ></TextInput>


        <ButtonGradient onPress={handleClick}
        >
          
        </ButtonGradient>
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
  },
  subTittle:{
    
    fontSize: 15,
    color:'gray',
  },
  text: {
    marginLeft: 5,
    fontSize: 15,
    color: '#000',
    marginTop: 30,
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


export default LogScreen;