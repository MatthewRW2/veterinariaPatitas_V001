import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="paw" size={80} color="#6A0D91" style={styles.logo} />
      <Text style={styles.title}>Regístrate en Patitas</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nombre completo" 
        placeholderTextColor="#000000"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Correo electrónico" 
        placeholderTextColor="#000000"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Contraseña" 
        placeholderTextColor="#000000" 
        secureTextEntry
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirmar contraseña" 
        placeholderTextColor="#000000" 
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#6A0D91',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000000',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#6A0D91',
    fontSize: 16,
  },
});
