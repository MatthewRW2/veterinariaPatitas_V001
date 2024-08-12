import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="calendar" size={40} color="#6A0D91" />
          <Text style={styles.cardText}>Citas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="paw" size={40} color="#6A0D91" />
          <Text style={styles.cardText}>Mascotas</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="medkit" size={40} color="#6A0D91" />
          <Text style={styles.cardText}>Servicios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <FontAwesome name="phone" size={40} color="#6A0D91" />
          <Text style={styles.cardText}>Contáctenos</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Reportes</Text>
      </TouchableOpacity>
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
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%',
    height: 150,
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  cardText: {
    color: '#000000',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6A0D91',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
