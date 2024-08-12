import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const multimediaItems = [
  {
    id: '1',
    type: 'photo',
    source: ('../assets/img/1.jpg'), 
    description: 'Nuestro equipo veterinario en acción',
  },
  {
    id: '2',
    type: 'photo',
    source: ('../assets/img/2.jpg'), 
    description: 'Mascotas felices después de su tratamiento',
  },
  {
    id: '3',
    type: 'photo',
    source: ('../assets/img/3.jpg'), 
    description: 'Instalaciones modernas y cómodas',
  },
  {
    id: '4',
    type: 'photo',
    source:('../assets/video/4.gif'), 
    description: 'Video: Cómo cuidamos a tus mascotas',
  },
];

export default function MultimediaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Multimedia</Text>
      <Text style={styles.subtitle}>Explora nuestras fotos y videos</Text>
      <View style={styles.mediaGrid}>
        {multimediaItems.map((item) => (
          <View key={item.id} style={styles.mediaCard}>
            {item.type === 'photo' ? (
              <Image source={item.source} style={styles.image} />
            ) : (
              <View style={styles.videoPlaceholder}>
                <FontAwesome name="play-circle" size={50} color="#FFFFFF" />
              </View>
            )}
            <Text style={styles.mediaDescription}>{item.description}</Text>
          </View>
        ))}
      </View>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6A0D91',
    marginBottom: 20,
  },
  mediaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mediaCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#F7C30F',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  videoPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#6A0D91',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaDescription: {
    padding: 10,
    color: '#000000',
    fontSize: 14,
  },
});
