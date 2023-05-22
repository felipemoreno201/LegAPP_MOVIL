import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, StyleSheet, Picker, TouchableOpacity, Button } from "react-native";
import ButtonGradient from "../components/ButtonLoad";
import axios from "axios";
import {launchImageLibrary} from 'react-native-image-picker';

const FormScreen = ({navigation}) => {

  const [Image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [valor, setvalor] = useState();
  const [descripcion, setdescripcion] = useState();
  const [providers, setProviders] = useState([]);
  const [tipoGasto, setTipoGasto] = useState("");
  const [tiposDeGasto, setTiposDeGasto] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedidrol, setSelectedidrol] = useState("");
  const [idusuario, setidusuario] = useState([]);
  const [selectedidusuario, setSelectedidusuario] = useState("");

  useEffect(() => {
    // Realizar solicitud HTTP para recuperar los proveedores desde la API
    axios.get("http://localhost:4500/proveedores")
      .then(response => {
        // Establecer los proveedores recuperados en el estado
        setProviders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Realizar solicitud HTTP para recuperar los proveedores desde la API
    axios.get("http://localhost:4500/usuarios")
      .then(response => {
        // Establecer los proveedores recuperados en el estado
        setidusuario(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Realizar solicitud HTTP para recuperar los gastos desde la API
    axios.get("http://localhost:4500/getSpents")
      .then(response => {
        // Establecer los tipos de gastos recuperados en el estado
        setTiposDeGasto(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const options = {
    includeBase64: false,
    mediaType: "photo",
    saveToPhotos: true, 
  }

  

  const openGallery = async () => {
   const images = await launchImageLibrary(options);
   //console.log(images.assets[0].uri.split(",")[1])
   setSelectedImage(images.assets[0].uri)
   setImage(images.assets[0].uri)
  };

  const handleClick = () => {
    const formdata=new FormData()
    formdata.append('idUsuario', selectedidusuario);
    formdata.append('idRol', selectedidrol);
    formdata.append('idTipoGasto', tipoGasto);
    formdata.append('idProveedor', selectedProvider);
    formdata.append('descripcionGasto', descripcion);
    formdata.append('valorGasto', valor);
    formdata.append("file",{
      uri:selectedImage,
      type: "image/jpeg",
      name: "image.jpeg"
    })
    axios.post('http://localhost:4500/createLegalization', formdata,{ headers: {
      "Content-Type": "multipart/form-data",
    },})
    .then(response => {
      console.log(selectedImage);
      if(response.data["message"]=="Legalizacion creada"){
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
      <Text style={styles.titulo}>Formulario de legalizacion.</Text>
      <Text style={styles.subTittle}>Por favor diligenciar los datos</Text>

      <Text style={styles.text}>Seleccione un proveedor</Text>
      <Picker
        selectedValue={selectedProvider}
        onValueChange={(itemValue, itemIndex) => setSelectedProvider(itemValue)}
        style={styles.picker}
      >
        {providers.map((provider, index) => (
          <Picker.Item key={index} label={provider.nombreProveedor} value={provider.idProveedor} />
        ))}
      </Picker>

      <Text style={styles.text}>Seleccione el tipo de gasto</Text>
      <Picker
        selectedValue={tipoGasto}
        onValueChange={(itemValue, itemIndex) => setTipoGasto(itemValue)}
        style={styles.picker}
      >
        {tiposDeGasto.map((tipoGasto, index) => (
          <Picker.Item key={index} label={tipoGasto.nombreGasto} value={tipoGasto.idTipoGasto} />
        ))}
      </Picker>

      <Text style={styles.text}>Seleccione el rol</Text>
      <Picker
        selectedValue={selectedidrol}
        onValueChange={(itemValue, itemIndex) => setSelectedidrol(itemValue) }
        style={styles.picker}
      >
           <Picker.Item label="Legalizador" value="1" />
           <Picker.Item label="Administrador" value="2" /> 
      </Picker>

      <Text style={styles.text}>Seleccione el correo</Text>
      <Picker
        selectedValue={selectedidusuario}
        onValueChange={(itemValue, itemIndex) => setSelectedidusuario(itemValue)}
        style={styles.picker}
      >
        {idusuario.map((idusuarios, index) => (
          <Picker.Item key={index} label={idusuarios.email} value={idusuarios.idUsuario} />
        ))}
      </Picker>

      <Text style={styles.text}>Valor</Text>
      <TextInput
        placeholder='Valor'
        style={styles.textInput}
        value={valor}
        onChangeText={setvalor}
      />

      <Text style={styles.text}>Descripcion</Text>
      <TextInput
        placeholder='Descripcion'
        style={styles.textInput}
        value={descripcion}
        onChangeText={setdescripcion}
      />

      <TouchableOpacity onPress={openGallery} style={styles.button}>
        <Text style={styles.buttonText}>Seleccionar imagen</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
      )}

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
  button: {
    borderWidth: 1,
    borderColor: '#12519F',
    backgroundColor: "white",
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
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
  picker: {
    borderWidth: 1,
    borderColor: '#12519F',
    padding: 10,
    width: '70%',
    marginTop: 5,
    borderRadius: 10,
  },

});

export default FormScreen;