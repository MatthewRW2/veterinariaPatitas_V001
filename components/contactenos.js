import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctenos</Text>
      <Text style={styles.description}>
        Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para ti y tus mascotas!
      </Text>
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
        style={styles.textArea} 
        placeholder="Escribe tu mensaje aquí" 
        placeholderTextColor="#000000"
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Enviar Mensaje</Text>
      </TouchableOpacity>
      <View style={styles.contactInfo}>
        <FontAwesome name="phone" size={24} color="#6A0D91" style={styles.icon} />
        <Text style={styles.contactText}>+57 320 802 3808</Text>
      </View>
      <View style={styles.contactInfo}>
        <FontAwesome name="envelope" size={24} color="#6A0D91" style={styles.icon} />
        <Text style={styles.contactText}>josemateolopezcifuentes@gmail.com</Text>
      </View>
      <View style={styles.contactInfo}>
        <FontAwesome name="map-marker" size={24} color="#6A0D91" style={styles.icon} />
        <Text style={styles.contactText}>SENA, Fontibon </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
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
  textArea: {
    width: '100%',
    borderColor: '#6A0D91',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    color: '#000000',
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#000000',
  },
});
