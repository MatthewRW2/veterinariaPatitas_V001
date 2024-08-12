import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const appointments = [
  {
    id: '1',
    petName: 'Firulais',
    date: '12 de Agosto, 2024',
    time: '10:00 AM',
    type: 'Consulta General',
  },
  {
    id: '2',
    petName: 'Michi',
    date: '15 de Agosto, 2024',
    time: '2:00 PM',
    type: 'Vacunación',
  },
];

export default function AppointmentsScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.appointmentCard}>
      <View style={styles.appointmentInfo}>
        <Text style={styles.petName}>{item.petName}</Text>
        <Text style={styles.appointmentDetails}>{item.date} - {item.time}</Text>
        <Text style={styles.appointmentType}>{item.type}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <FontAwesome name="edit" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Citas</Text>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <TouchableOpacity style={styles.addButton}>
        <FontAwesome name="plus" size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Nueva Cita</Text>
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
  list: {
    marginBottom: 20,
  },
  appointmentCard: {
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  appointmentInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  appointmentDetails: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  appointmentType: {
    fontSize: 16,
    color: '#6A0D91',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#6A0D91',
    padding: 10,
    borderRadius: 20,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#6A0D91',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
