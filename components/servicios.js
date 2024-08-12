import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const services = [
  {
    id: '1',
    name: 'Consulta General',
    description: 'Revisión completa para evaluar la salud general de tu mascota.',
    icon: 'stethoscope',
  },
  {
    id: '2',
    name: 'Vacunación',
    description: 'Vacunas esenciales para proteger a tu mascota de enfermedades.',
    icon: 'syringe',
  },
  {
    id: '3',
    name: 'Desparasitación',
    description: 'Tratamiento contra parásitos internos y externos.',
    icon: 'bug',
  },
  {
    id: '4',
    name: 'Cirugía',
    description: 'Procedimientos quirúrgicos realizados por profesionales experimentados.',
    icon: 'scalpel',
  },
  {
    id: '5',
    name: 'Peluquería Canina y Felina',
    description: 'Corte de pelo y aseo para que tu mascota luzca siempre bien.',
    icon: 'cut',
  },
  {
    id: '6',
    name: 'Emergencias',
    description: 'Atención urgente para situaciones de emergencia.',
    icon: 'ambulance',
  },
];

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Servicios que Ofrecemos</Text>
      {services.map((service) => (
        <View key={service.id} style={styles.serviceCard}>
          <FontAwesome name={service.icon} size={40} color="#6A0D91" style={styles.icon} />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>{service.name}</Text>
            <Text style={styles.serviceDescription}>{service.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
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
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    marginRight: 20,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#000000',
  },
});
